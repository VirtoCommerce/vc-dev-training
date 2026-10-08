using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Data.Model;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.XapiExample.Core.Models;

namespace VirtoCommerce.XapiExample.Data.Models
{
    public class ExtendedCustomerOrderEntity : CustomerOrderEntity
    {
        public string RejectionReason { get; set; }

        public override OrderOperation ToModel(OrderOperation operation)
        {
            if (operation is ExtendedCustomerOrder extendedOrder)
            {
                extendedOrder.RejectionReason = RejectionReason;
            }

            base.ToModel(operation);

            return operation;
        }

        public override OperationEntity FromModel(OrderOperation operation, PrimaryKeyResolvingMap pkMap)
        {
            if (operation is ExtendedCustomerOrder extendedOrder)
            {
                RejectionReason = extendedOrder.RejectionReason;
            }

            base.FromModel(operation, pkMap);

            return this;
        }

        public override void Patch(OperationEntity operation)
        {
            if (operation is ExtendedCustomerOrderEntity target)
            {
                target.RejectionReason = RejectionReason;
            }

            base.Patch(operation);
        }
    }
}
