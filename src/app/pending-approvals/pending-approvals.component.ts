import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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
export class PendingApprovalsComponent {
  private readonly orderService = inject(OrderGraphqlService);

  private readonly pendingApprovalsResult = toSignal(
    this.orderService.getPendingForApprovals(APPROVER_ID)
  );

  protected readonly loading = computed(() => this.pendingApprovalsResult()?.loading ?? true);

  protected readonly orders = computed(() => {
    const result = this.pendingApprovalsResult();
    const pendingForApprovals = result?.data?.pendingForApprovals;
    return (pendingForApprovals?.items?.filter((i): i is OrderItemType => !!i) ?? []) as OrderItemType[];
  });

  protected readonly totalCount = computed(() => {
    return this.pendingApprovalsResult()?.data?.pendingForApprovals?.totalCount ?? 0;
  });

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
