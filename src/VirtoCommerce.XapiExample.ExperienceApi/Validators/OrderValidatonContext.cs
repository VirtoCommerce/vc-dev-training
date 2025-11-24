using VirtoCommerce.XOrder.Core;

namespace VirtoCommerce.XapiExample.ExperienceApi.Validators;

public class OrderValidatonContext
{
    public CustomerOrderAggregate Aggregate { get; set; }

    public OrderValidatonContext(CustomerOrderAggregate aggregate)
    {
        Aggregate = aggregate;
    }

    public OrderValidatonContext()
    {
    }
}
