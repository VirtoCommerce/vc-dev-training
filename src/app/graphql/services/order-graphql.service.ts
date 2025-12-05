import { inject, Injectable } from '@angular/core';
import { ObservableQuery } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  IApproveOrderGQL,
  IApproveOrderMutation,
  IDemoCustomerOrderType,
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

  getPendingForApprovals(approverId: string): Observable<ObservableQuery.Result<IPendingForApprovalQuery>> {
    return this.pendingForApprovalGQL.watch({ variables: { approverId } }).valueChanges;
  }

  approveOrder(
    command: IInputApproveCustomerOrderCommand,
    currentOrder: Pick<IDemoCustomerOrderType, 'storeId'>
  ): Observable<Apollo.MutateResult<IApproveOrderMutation>> {
    // Optimistic response ensures UI updates immediately
    return this.approveOrderGQL.mutate({
      variables: { command },
      optimisticResponse: {
        approveOrder: {
          __typename: 'DemoCustomerOrderType',
          id: command.orderId,
          status: 'Approved',
          isApproved: true,
          storeId: currentOrder.storeId,
        },
      },
    });
  }

  rejectOrder(
    command: IInputRejectCustomerOrderCommand,
    currentOrder: Pick<IDemoCustomerOrderType, 'storeId'>
  ): Observable<Apollo.MutateResult<IRejectOrderMutation>> {
    return this.rejectOrderGQL.mutate({
      variables: { command },
      optimisticResponse: {
        rejectOrder: {
          __typename: 'DemoCustomerOrderType',
          id: command.orderId,
          status: 'Rejected',
          isApproved: false,
          storeId: currentOrder.storeId,
        },
      },
    });
  }
}
