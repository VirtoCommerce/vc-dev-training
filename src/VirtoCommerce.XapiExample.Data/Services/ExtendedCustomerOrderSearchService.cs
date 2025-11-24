using System;
using System.Linq;
using Microsoft.Extensions.Options;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.OrdersModule.Data.Model;
using VirtoCommerce.OrdersModule.Data.Repositories;
using VirtoCommerce.OrdersModule.Data.Services;
using VirtoCommerce.Platform.Core.Caching;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.Platform.Core.GenericCrud;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XapiExample.Data.Models;

namespace VirtoCommerce.XapiExample.Data.Services;

public class ExtendedCustomerOrderSearchService : CustomerOrderSearchService
{
    public ExtendedCustomerOrderSearchService(Func<IOrderRepository> repositoryFactory, IPlatformMemoryCache platformMemoryCache, ICustomerOrderService crudService, IOptions<CrudOptions> crudOptions)
        : base(repositoryFactory, platformMemoryCache, crudService, crudOptions)
    {
    }

    protected override IQueryable<CustomerOrderEntity> BuildQuery(IRepository repository, CustomerOrderSearchCriteria criteria)
    {
        var query = base.BuildQuery(repository, criteria);

        if (criteria is ExtendedCustomerOrderSearchCriteria extendedCriteria)
        {
            if (!extendedCriteria.RejectionReason.IsNullOrEmpty())
            {
                query = query.Where(x => x is ExtendedCustomerOrderEntity && ((ExtendedCustomerOrderEntity)x).RejectionReason == extendedCriteria.RejectionReason);
            }
        }

        return query;
    }
}
