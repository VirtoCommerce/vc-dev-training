using GraphQL.Types;
using VirtoCommerce.XapiExample.ExperienceApi.Commands;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas;

public class InputRejectCustomerOrderCommandType : InputObjectGraphType<RejectCustomerOrderCommand>
{
    public InputRejectCustomerOrderCommandType()
    {
        Name = "InputRejectCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be rejected.");
        Field(x => x.RejectionReason, nullable: false).Description("The reason for rejecting the customer order.");
    }
}
