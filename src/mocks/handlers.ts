import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("PendingForApproval", () => {
    return HttpResponse.json({
      data: {
        pendingForApprovals: {
          totalCount: 2,
          items: [
            {
              id: "100",
              isApproved: true,
              status: "Approved",
              storeId: "Electronics",
              __typename: "DemoCustomerOrderType"
            },
            {
              id: "101",
              isApproved: false,
              status: "Rejected",
              storeId: "Electronics",
              __typename: "DemoCustomerOrderType"
            }
          ],
          __typename: "DemoCustomerOrderConnection"
        }
      }
    });
  }),

  graphql.mutation("ApproveOrder", ({ variables }) => {
    const { command } = variables;
    return HttpResponse.json({
      data: {
        approveOrder: { id: command.orderId, isApproved: true, status: "Approved", storeId: "Electronics", __typename: "DemoCustomerOrderType" }
      },
      // errors: [
      //   {
      //     message: "Order not found",
      //     path: ["approveOrder"],
      //     extensions: {
      //       code: "NOT_FOUND"
      //     }
      //   }
      // ]
    });
  }),
];
