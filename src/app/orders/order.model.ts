export interface IOrder {
  id: string;
  isApproved: boolean;
  status: string;
  storeId: string;
}

export type OrderStatusType = 'Pending' | 'Approved' | 'Rejected';



