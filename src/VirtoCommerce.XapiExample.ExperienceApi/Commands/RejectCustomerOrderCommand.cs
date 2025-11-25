using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommand : ICommand<ExtendedCustomerOrderAggregate>
{
    public string OrderId { get; set; }
    public string RejectionReason { get; set; }
}
