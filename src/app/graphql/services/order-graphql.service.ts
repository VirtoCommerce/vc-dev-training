import { inject, Injectable } from '@angular/core';
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
  OrderDetailsFragmentDoc,
} from '../types/generated';

@Injectable({ providedIn: 'root' })
export class OrderGraphqlService {
  private readonly apollo = inject(Apollo);
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
    const currentOrder = this.readOrderFromCache(command.orderId);

    return this.approveOrderGQL.mutate({
      variables: { command },
      optimisticResponse: currentOrder ? {
        approveOrder: {
          __typename: 'DemoCustomerOrderType',
          id: command.orderId,
          status: 'Approved',
          isApproved: true,
          storeId: currentOrder.storeId,
        },
      } : undefined,
    });
  }

  rejectOrder(
    command: IInputRejectCustomerOrderCommand,
  ): Observable<Apollo.MutateResult<IRejectOrderMutation>> {
    const currentOrder = this.readOrderFromCache(command.orderId);

    return this.rejectOrderGQL.mutate({
      variables: { command },
      optimisticResponse: currentOrder ? {
        rejectOrder: {
          __typename: 'DemoCustomerOrderType',
          id: command.orderId,
          status: 'Rejected',
          isApproved: false,
          storeId: currentOrder.storeId,
        },
      } : undefined,
    });
  }

  private readOrderFromCache(orderId: string): IDemoCustomerOrderType | null {
    const id = this.apollo.client.cache.identify({ __typename: 'DemoCustomerOrderType', id: orderId });

    if (!id) {
      return null;
    }

    return this.apollo.client.readFragment<IDemoCustomerOrderType>({
      id,
      fragment: OrderDetailsFragmentDoc,
      fragmentName: 'OrderDetails',
    });
  }
}
