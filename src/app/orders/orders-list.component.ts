import { Component, signal, computed } from '@angular/core';
import type { IOrder, OrderStatusType } from './order.model';

const MOCK_ORDERS: IOrder[] = [
  { id: 'ORD-001', isApproved: false, status: 'Pending', storeId: 'store-1' },
  { id: 'ORD-002', isApproved: false, status: 'Pending', storeId: 'store-2' },
  { id: 'ORD-003', isApproved: true, status: 'Approved', storeId: 'store-1' },
  { id: 'ORD-004', isApproved: false, status: 'Pending', storeId: 'store-3' },
  { id: 'ORD-005', isApproved: false, status: 'Rejected', storeId: 'store-2' },
];

@Component({
  selector: 'app-orders-list',
  template: `
    <div class="orders-container">
      <h2 class="orders-title">Pending Orders for Approval</h2>
      <p class="orders-count">Total: {{ totalCount() }}</p>

      <ul class="orders-list">
        @for (order of orders(); track order.id) {
          <li class="order-item" [class.order-item--approved]="order.status === 'Approved'" [class.order-item--rejected]="order.status === 'Rejected'">
            <div class="order-info">
              <span class="order-id">{{ order.id }}</span>
              <span class="order-status" [class.status--pending]="order.status === 'Pending'" [class.status--approved]="order.status === 'Approved'" [class.status--rejected]="order.status === 'Rejected'">
                {{ order.status }}
              </span>
            </div>

            <div class="order-actions">
              @if (order.status === 'Pending') {
                <button class="btn btn--approve" (click)="approveOrder(order.id)">Approve</button>
                <button class="btn btn--reject" (click)="rejectOrder(order.id)">Reject</button>
              }
            </div>
          </li>
        } @empty {
          <li class="orders-empty">No orders pending for approval</li>
        }
      </ul>
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
  `,
})
export class OrdersListComponent {
  protected readonly orders = signal<IOrder[]>(MOCK_ORDERS);
  protected readonly totalCount = computed(() => this.orders().length);

  approveOrder(orderId: string): void {
    this.updateOrderStatus(orderId, 'Approved', true);
  }

  rejectOrder(orderId: string): void {
    this.updateOrderStatus(orderId, 'Rejected', false);
  }

  private updateOrderStatus(orderId: string, status: OrderStatusType, isApproved: boolean): void {
    this.orders.update((orders) =>
      orders.map((order) => (order.id === orderId ? { ...order, status, isApproved } : order))
    );
  }
}

