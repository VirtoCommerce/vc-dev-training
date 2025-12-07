import { Component, computed, inject, signal } from '@angular/core';
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

  private readonly mutationErrors = signal<Record<string, string>>({});
  private readonly globalError = signal<string | null>(null);

  protected readonly error = computed(() => {
    if (this.globalError()) {
      return this.globalError();
    }

    const result = this.pendingApprovalsResult();
    const error = result?.error;

    if (error) {
      return error.message;
    }

    return null;
  });

  protected getOrderError(orderId: string): string | null {
    return this.mutationErrors()[orderId] ?? null;
  }

  approveOrder(orderId: string): void {
    this.clearOrderError(orderId);
    this.globalError.set(null);
    this.orderService.approveOrder({ orderId }).subscribe({
      next: (result) => {
        if (result.error) {
           this.setOrderError(orderId, result.error.message);
        }
      },
      error: (err) => {
        console.error('Failed to approve order:', err);
        this.globalError.set(err.message || 'Failed to approve order');
      },
    });
  }

  rejectOrder(orderId: string): void {
    this.clearOrderError(orderId);
    this.globalError.set(null);
    this.orderService.rejectOrder({ orderId }).subscribe({
      next: (result) => {
        if (result.error) {
          this.setOrderError(orderId, result.error.message);
        }
      },
      error: (err) => {
        console.error('Failed to reject order:', err);
        this.globalError.set(err.message || 'Failed to reject order');
      },
    });
  }

  private setOrderError(orderId: string, message: string): void {
    this.mutationErrors.update(errors => ({
      ...errors,
      [orderId]: message
    }));
  }

  private clearOrderError(orderId: string): void {
    this.mutationErrors.update(errors => {
      const newErrors = { ...errors };
      delete newErrors[orderId];
      return newErrors;
    });
  }
}
