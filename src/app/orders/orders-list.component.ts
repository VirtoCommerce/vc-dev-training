import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ObservableQuery } from '@apollo/client/core';
import { OrderGraphqlService } from '../graphql';
import type { IPendingForApprovalQuery } from '../graphql';

type OrderItemType = NonNullable<
  NonNullable<NonNullable<IPendingForApprovalQuery['pendingForApprovals']>['items']>[number]
>;

const APPROVER_ID = 'User1';

@Component({
  selector: 'app-orders-list',
  template: `
    <div class="orders-container">
      <h2 class="orders-title">Pending Orders for Approval</h2>
      <p class="orders-count">Total: {{ totalCount() }}</p>

      @if (loading()) {
        <!-- Skeleton Loading State -->
        <ul class="orders-list skeleton-list">
          @for (i of [1,2]; track i) {
            <li class="skeleton-item">
              <div class="skeleton-info"></div>
              <div class="skeleton-actions"></div>
            </li>
          }
        </ul>
      } @else if (error()) {
         <!-- Error State with Partial Success Support -->
        <div class="orders-error">
           <p>{{ error() }}</p>
           <button class="btn btn--reject" (click)="loadOrders()">Retry</button>
        </div>
      } @else {
        <ul class="orders-list">
          @for (order of orders(); track order.id) {
            <li class="order-item" [class.order-item--approved]="order.isApproved" [class.order-item--rejected]="order.status === 'Rejected'">
              <div class="order-info">
                <span class="order-id">{{ order.id }}</span>
                <span class="order-status" [class.status--pending]="!order.isApproved && order.status !== 'Rejected'" [class.status--approved]="order.isApproved" [class.status--rejected]="order.status === 'Rejected'">
                  {{ order.status }}
                </span>
              </div>

              <div class="order-actions">
                <button class="btn btn--approve" (click)="approveOrder(order.id)">Approve</button>
                <button class="btn btn--reject" (click)="rejectOrder(order.id)">Reject</button>
              </div>
            </li>
          } @empty {
            <li class="orders-empty">No orders pending for approval</li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    .orders-container {
      max-width: 560px;
      margin: 2rem auto;
      padding: 2rem;
      background: white;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .orders-title {
      margin: 0 0 0.25rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a1a1a;
    }

    .orders-count {
      margin: 0 0 1.5rem;
      color: #6b7280;
      font-size: 0.875rem;
    }

    .orders-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .order-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      transition: background-color 0.15s;

      &:hover {
        background: #f3f4f6;
      }
    }

    .order-item--approved {
      background: #f0fdf4;
      border-color: #bbf7d0;
    }

    .order-item--rejected {
      background: #fef2f2;
      border-color: #fecaca;
    }

    .order-info {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .order-id {
      font-weight: 500;
      color: #1a1a1a;
      font-size: 0.9375rem;
    }

    .order-status {
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.625rem;
      border-radius: 9999px;
    }

    .status--pending {
      background: #fef3c7;
      color: #92400e;
    }

    .status--approved {
      background: #d1fae5;
      color: #065f46;
    }

    .status--rejected {
      background: #fee2e2;
      color: #991b1b;
    }

    .order-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 8px;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s;

      &:hover {
        opacity: 0.85;
      }

      &:active {
        opacity: 0.7;
      }
    }

    .btn--approve {
      background: #10b981;
      color: white;
    }

    .btn--reject {
      background: white;
      color: #6b7280;
      border: 1px solid #d1d5db;

      &:hover {
        background: #f9fafb;
        color: #dc2626;
        border-color: #fca5a5;
        opacity: 1;
      }
    }

    .orders-empty {
      text-align: center;
      padding: 3rem;
      color: #9ca3af;
    }

    /* Skeleton Styles */
    .skeleton-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.25rem;
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e5e7eb;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .skeleton-info {
      height: 24px;
      width: 150px;
      background: #e5e7eb;
      border-radius: 4px;
    }

    .skeleton-actions {
      height: 32px;
      width: 140px;
      background: #e5e7eb;
      border-radius: 4px;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }

    .orders-error {
      text-align: center;
      padding: 2rem;
      color: #dc2626;
      background: #fef2f2;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  `,
})

export class OrdersListComponent implements OnInit {
  private readonly orderService = inject(OrderGraphqlService);

  protected readonly orders = signal<OrderItemType[]>([]);
  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly totalCount = computed(() => this.orders().length);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.loading.set(true);
    this.error.set(null);

    this.orderService.getPendingForApprovals(APPROVER_ID).subscribe({
      next: (result: ObservableQuery.Result<IPendingForApprovalQuery>) => {
        const pendingForApprovals = result.data?.pendingForApprovals;
        const items = (pendingForApprovals?.items?.filter((i): i is OrderItemType => !!i) ?? []) as OrderItemType[];
        this.orders.set(items);
        this.loading.set(result.loading);

        // Handle partial errors if any
        // Cast to any to avoid linter issues with ApolloQueryResult definition in this setup
        const res = result as any;
        if (res.errors?.length) {
           if (items.length === 0) {
             this.error.set(res.errors[0].message);
           } else {
             console.warn('GraphQL Errors:', res.errors);
           }
        }
      },
      error: (err) => {
        this.error.set('Failed to load orders. Please try again.');
        this.loading.set(false);
        console.error('Failed to load orders:', err);
      },
    });
  }

  approveOrder(orderId: string): void {
    const order = this.orders().find(o => o.id === orderId);
    if (!order) return;

    this.orderService.approveOrder({ orderId }, order).subscribe({
      error: (err) => console.error('Failed to approve order:', err),
    });
  }

  rejectOrder(orderId: string): void {
    const order = this.orders().find(o => o.id === orderId);
    if (!order) return;

    this.orderService.rejectOrder({ orderId }, order).subscribe({
      error: (err) => console.error('Failed to reject order:', err),
    });
  }
}
