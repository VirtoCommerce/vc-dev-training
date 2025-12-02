using System.Threading.Tasks;
using VirtoCommerce.InventoryModule.Core.Services;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.OrdersModule.Data.Search.Indexed;
using VirtoCommerce.Platform.Core.DynamicProperties;
using VirtoCommerce.SearchModule.Core.Extensions;
using VirtoCommerce.SearchModule.Core.Model;
using VirtoCommerce.StoreModule.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;

namespace VirtoCommerce.XapiExample.Data.Services;

public class ExtendedCustomerOrderDocumentBuilder : CustomerOrderDocumentBuilder
{
    public ExtendedCustomerOrderDocumentBuilder(ICustomerOrderService customerOrderService, IDynamicPropertySearchService dynamicPropertySearchService, IStoreService storeService, IFulfillmentCenterService fulfillmentCenterService) : base(customerOrderService, dynamicPropertySearchService, storeService, fulfillmentCenterService)
    {
    }

    protected override async Task<IndexDocument> CreateDocument(CustomerOrder order)
    {
        var document = await base.CreateDocument(order);

        if (order is ExtendedCustomerOrder extendedOrder)
        {
            document.AddFilterableStringAndContentString("rejectionReason", extendedOrder.RejectionReason);
        }

        return document;
    }
}
