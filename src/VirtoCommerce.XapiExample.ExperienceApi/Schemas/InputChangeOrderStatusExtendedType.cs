using GraphQL.Types;
using VirtoCommerce.XOrder.Core.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas
{
    public class InputChangeOrderStatusExtendedType : InputChangeOrderStatusType
    {
        public InputChangeOrderStatusExtendedType()
        {
            Name = "InputChangeOrderStatusType";

            Field<StringGraphType>("rejectionReason")
                .Description("Rejection reason for extension");
        }
    }
}
