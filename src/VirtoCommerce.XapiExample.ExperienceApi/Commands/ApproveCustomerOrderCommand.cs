using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ApproveCustomerOrderCommand : ICommand<ExtendedCustomerOrderAggregate>
{
    public string OrderId { get; set; }
}
