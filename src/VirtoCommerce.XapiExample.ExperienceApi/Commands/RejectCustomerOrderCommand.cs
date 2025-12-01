using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.Infrastructure;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommand : ICommand<CustomerOrder>
{
    public string OrderId { get; set; }
}
