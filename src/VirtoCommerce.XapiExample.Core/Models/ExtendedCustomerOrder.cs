using VirtoCommerce.OrdersModule.Core.Model;

namespace VirtoCommerce.XapiExample.Core.Models;

public class ExtendedCustomerOrder : CustomerOrder
{
    public string RejectionReason { get; set; }
}
