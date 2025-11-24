using VirtoCommerce.OrdersModule.Core.Model.Search;

namespace VirtoCommerce.XapiExample.Core.Models;

public class ExtendedCustomerOrderSearchCriteria : CustomerOrderSearchCriteria
{
    public string RejectionReason { get; set; }
}
