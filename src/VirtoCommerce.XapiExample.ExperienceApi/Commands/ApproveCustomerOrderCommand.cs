using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.Infrastructure;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ApproveCustomerOrderCommand : ICommand<CustomerOrder>
{
    public string OrderId { get; set; }

    public string StoreId { get; set; }

    public string CultureName { get; set; }
}
