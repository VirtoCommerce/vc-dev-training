using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;

namespace VirtoCommerce.XapiExample.ExperienceApi.Validators;

public class OrderValidatonContext
{
    public ExtendedCustomerOrderAggregate Aggregate { get; set; }

    public OrderValidatonContext(ExtendedCustomerOrderAggregate aggregate)
    {
        Aggregate = aggregate;
    }

    public OrderValidatonContext()
    {
    }
}
