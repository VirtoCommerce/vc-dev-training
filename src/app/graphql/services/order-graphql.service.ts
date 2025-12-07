import { inject, Injectable } from '@angular/core';
import { ObservableQuery } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

// Temporary types until generation is set up
export interface IDemoCustomerOrderType {
  id: string;
  status: string;
  isApproved: boolean;
  storeId: string;
  __typename?: string;
}

export interface IInputApproveCustomerOrderCommand {
  orderId: string;
  [key: string]: any;
}

export interface IInputRejectCustomerOrderCommand {
  orderId: string;
  [key: string]: any;
}

export interface IPendingForApprovalQuery {
  pendingForApprovals: {
    totalCount: number;
    items: IDemoCustomerOrderType[];
  };
}

export interface IApproveOrderMutation {
  approveOrder: IDemoCustomerOrderType;
}

export interface IRejectOrderMutation {
  rejectOrder: IDemoCustomerOrderType;
}

const ORDER_DETAILS_FRAGMENT = gql`
  fragment OrderDetails on DemoCustomerOrderType {
    id
    isApproved
    status
    storeId
  }
`;

const PENDING_FOR_APPROVAL_QUERY = gql`
  query PendingForApproval($approverId: String!) {
    pendingForApprovals(approverId: $approverId) {
      totalCount
      items {
        ...OrderDetails
      }
    }
  }
  ${ORDER_DETAILS_FRAGMENT}
`;

const APPROVE_ORDER_MUTATION = gql`
  mutation ApproveOrder($command: InputApproveCustomerOrderCommand!) {
    approveOrder(command: $command) {
      ...OrderDetails
    }
  }
  ${ORDER_DETAILS_FRAGMENT}
`;

const REJECT_ORDER_MUTATION = gql`
  mutation RejectOrder($command: InputRejectCustomerOrderCommand!) {
    rejectOrder(command: $command) {
      ...OrderDetails
    }
  }
  ${ORDER_DETAILS_FRAGMENT}
`;

@Injectable({ providedIn: 'root' })
export class OrderGraphqlService {
  private readonly apollo = inject(Apollo);

  getPendingForApprovals(approverId: string): Observable<ObservableQuery.Result<IPendingForApprovalQuery>> {
    return this.apollo.watchQuery<IPendingForApprovalQuery>({
      query: PENDING_FOR_APPROVAL_QUERY,
      variables: { approverId },
    }).valueChanges;
  }

  approveOrder(
    command: IInputApproveCustomerOrderCommand,
  ): Observable<Apollo.MutateResult<IApproveOrderMutation>> {
    return this.apollo.mutate<IApproveOrderMutation>({
      mutation: APPROVE_ORDER_MUTATION,
      variables: { command },
    });
  }

  rejectOrder(
    command: IInputRejectCustomerOrderCommand,
  ): Observable<Apollo.MutateResult<IRejectOrderMutation>> {
    return this.apollo.mutate<IRejectOrderMutation>({
      mutation: REJECT_ORDER_MUTATION,
      variables: { command },
    });
  }
}
