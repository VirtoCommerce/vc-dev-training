using GraphQL.Types;
using VirtoCommerce.XapiExample.ExperienceApi.Commands;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas;

public class InputApproveCustomerOrderCommandType : InputObjectGraphType<ApproveCustomerOrderCommand>
{
    public InputApproveCustomerOrderCommandType()
    {
        Name = "InputApproveCustomerOrderCommand";

        Field(x => x.OrderId, nullable: false).Description("The ID of the customer order to be approved.");
        Field(x => x.StoreId, nullable: false).Description("The store ID associated with the customer order.");
        Field(x => x.CultureName, nullable: false).Description("The culture name for localization purposes.");
    }
}
