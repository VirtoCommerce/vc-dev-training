using System.Collections.Generic;
using System.Threading.Tasks;
using VirtoCommerce.OrdersModule.Data.Model;
using VirtoCommerce.OrdersModule.Data.Repositories;
using VirtoCommerce.Platform.Core.Domain;

namespace VirtoCommerce.XapiExample.Data.Repositories;

public class XapiExampleRepository : OrderRepository
{
    public XapiExampleRepository(XapiExampleDbContext dbContext, IUnitOfWork unitOfWork = null)
        : base(dbContext, unitOfWork)
    {
    }

    public override async Task<IList<CustomerOrderEntity>> GetCustomerOrdersByIdsAsync(IList<string> ids, string responseGroup = null)
    {
        var result = await base.GetCustomerOrdersByIdsAsync(ids, responseGroup);

        return result;
    }
}
