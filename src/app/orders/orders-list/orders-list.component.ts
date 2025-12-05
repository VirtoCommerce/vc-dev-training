import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ObservableQuery } from '@apollo/client/core';
import { OrderGraphqlService } from '../../graphql';
import type { IPendingForApprovalQuery } from '../../graphql';
import { OrderItemComponent } from '../order-item/order-item.component';
import { OrderItemType } from '../types';

const APPROVER_ID = 'User1';

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [OrderItemComponent],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css',
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
