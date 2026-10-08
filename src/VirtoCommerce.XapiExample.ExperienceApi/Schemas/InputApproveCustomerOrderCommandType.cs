using GraphQL.Types;
using VirtoCommerce.XapiExample.ExperienceApi.Commands;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas;

public class InputApproveCustomerOrderCommandType : InputObjectGraphType<ApproveCustomerOrderCommand>
{
    public InputApproveCustomerOrderCommandType()
    {
        Name = "InputApproveCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be approved.");
    }
}
