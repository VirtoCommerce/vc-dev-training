import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { OrderGraphqlService } from '../graphql/services/order-graphql.service';
import { OrderItemComponent } from '../orders/order-item/order-item.component';
import { OrderItemType } from '../orders/types';

const APPROVER_ID = '';

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [OrderItemComponent],
  templateUrl: './pending-approvals.component.html',
  styleUrl: './pending-approvals.component.css',
})
export class PendingApprovalsComponent implements OnInit {
  private readonly orderService = inject(OrderGraphqlService);

  protected readonly orders = signal<OrderItemType[]>([]);
  protected readonly totalCount = computed(() => this.orders().length);

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getPendingForApprovals(APPROVER_ID).subscribe({
      next: (result) => {
        const pendingForApprovals = result.data?.pendingForApprovals;
        const items = (pendingForApprovals?.items?.filter((i): i is OrderItemType => !!i) ?? []) as OrderItemType[];
        this.orders.set(items);
      },
      error: (err) => {
        console.error('Failed to load orders:', err);
      },
    });
  }

  approveOrder(orderId: string): void {
    this.orderService.approveOrder({ orderId }).subscribe({
      error: (err) => console.error('Failed to approve order:', err),
    });
  }

  rejectOrder(orderId: string): void {
    this.orderService.rejectOrder({ orderId }).subscribe({
      error: (err) => console.error('Failed to reject order:', err),
    });
  }
}
