import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { OrderGraphqlService } from '../graphql/services/order-graphql.service';

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pending-approvals.component.html',
  styleUrl: './pending-approvals.component.css'
})

export class PendingApprovalsComponent {
  private readonly orderService = inject(OrderGraphqlService);

  // Using a hardcoded ID for demonstration
  readonly pendingApprovals$ = this.orderService.getPendingForApprovals('').pipe(
    map((result: any) => result.data?.pendingForApprovals.items ?? [])
  );
}
