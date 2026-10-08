using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas;

public class DemoCustomerOrderType : ExtendableGraphType<CustomerOrder>
{
    public DemoCustomerOrderType()
    {
        Field(x => x.Id, nullable: false);
        Field(x => x.IsApproved, nullable: false);
        Field(x => x.Status, nullable: false);
        Field(x => x.StoreId, nullable: false);
    }
}
