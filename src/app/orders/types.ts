import type { IPendingForApprovalQuery } from '../graphql';

export type OrderItemType = NonNullable<
  NonNullable<NonNullable<IPendingForApprovalQuery['pendingForApprovals']>['items']>[number]
>;

