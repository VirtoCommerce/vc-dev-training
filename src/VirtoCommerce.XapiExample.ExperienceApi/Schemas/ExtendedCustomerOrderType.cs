using GraphQL.Types;
using VirtoCommerce.PaymentModule.Core.Services;
using VirtoCommerce.Platform.Core.Settings;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XOrder.Core.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Schemas;

public class ExtendedCustomerOrderType : CustomerOrderType
{
    public ExtendedCustomerOrderType(IDynamicPropertyResolverService dynamicPropertyResolverService, IPaymentMethodsSearchService paymentMethodsSearchService, ILocalizableSettingService localizableSettingService)
        : base(dynamicPropertyResolverService, paymentMethodsSearchService, localizableSettingService)
    {
        Name = "CustomerOrderType"; // otherwise the type name in the schema will be "ExtendedCustomerOrderType"

        Field<StringGraphType>(nameof(ExtendedCustomerOrder.RejectionReason))
                .Resolve(context =>
                {
                    var extendedOrder = context.Source as ExtendedCustomerOrderAggregate;
                    return extendedOrder?.ExtendedCustomerOrder?.RejectionReason;
                })
                .Description("Extension");
    }
}
