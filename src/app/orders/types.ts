import type { IPendingForApprovalQuery } from '../graphql/types/generated';

export type OrderItemType = NonNullable<
  NonNullable<NonNullable<IPendingForApprovalQuery['pendingForApprovals']>['items']>[number]
>;

