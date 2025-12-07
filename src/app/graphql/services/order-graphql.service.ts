import { inject, Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  IApproveOrderGQL,
  IApproveOrderMutation,
  IInputApproveCustomerOrderCommand,
  IInputRejectCustomerOrderCommand,
  IPendingForApprovalGQL,
  IPendingForApprovalQuery,
  IRejectOrderGQL,
  IRejectOrderMutation,
} from '../types/generated';

@Injectable({ providedIn: 'root' })
export class OrderGraphqlService {
  private readonly pendingForApprovalGQL = inject(IPendingForApprovalGQL);
  private readonly approveOrderGQL = inject(IApproveOrderGQL);
  private readonly rejectOrderGQL = inject(IRejectOrderGQL);

  getPendingForApprovals(approverId: string): Observable<Apollo.QueryResult<IPendingForApprovalQuery>> {
    return this.pendingForApprovalGQL.watch({
      variables: { approverId },
    }).valueChanges as unknown as Observable<Apollo.QueryResult<IPendingForApprovalQuery>>;
  }

  approveOrder(
    command: IInputApproveCustomerOrderCommand,
  ): Observable<Apollo.MutateResult<IApproveOrderMutation>> {
    return this.approveOrderGQL.mutate({
      variables: { command },
    });
  }

  rejectOrder(
    command: IInputRejectCustomerOrderCommand,
  ): Observable<Apollo.MutateResult<IRejectOrderMutation>> {
    return this.rejectOrderGQL.mutate({
      variables: { command },
    });
  }
}
