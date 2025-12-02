using VirtoCommerce.MarketingModule.Core.Search;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XOrder.Core;

namespace VirtoCommerce.XapiExample.ExperienceApi.Aggregates;

public class ExtendedCustomerOrderAggregate : CustomerOrderAggregate
{
    public ExtendedCustomerOrderAggregate(IDynamicPropertyUpdaterService dynamicPropertyUpdaterService, IPromotionUsageSearchService promotionUsageSearchService)
        : base(dynamicPropertyUpdaterService, promotionUsageSearchService)
    {
    }

    public ExtendedCustomerOrder ExtendedCustomerOrder => Order as ExtendedCustomerOrder;
}
