using System.Threading.Tasks;
using GraphQL;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Logging;
using VirtoCommerce.CoreModule.Core.Currency;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XOrder.Core.Queries;
using VirtoCommerce.XOrder.Data.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class ExtendedSearchCustomerOrderQueryBuilder : SearchOrderQueryBuilder
{
    private readonly ILogger<ExtendedSearchCustomerOrderQueryBuilder> _logger;

    public ExtendedSearchCustomerOrderQueryBuilder(IMediator mediator,
        IAuthorizationService authorizationService,
        ICurrencyService currencyService,
        IUserManagerCore userManagerCore,
        ILogger<ExtendedSearchCustomerOrderQueryBuilder> logger)
        : base(mediator, authorizationService, currencyService, userManagerCore)
    {
        _logger = logger;
    }

    protected override Task BeforeMediatorSend(IResolveFieldContext<object> context, SearchCustomerOrderQuery request)
    {
        _logger.LogInformation("Executing ExtendedSearchCustomerOrderQueryBuilder for CustomerId: {CustomerId}", request.CustomerId);

        return base.BeforeMediatorSend(context, request);
    }
}
