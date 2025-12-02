using System.Threading.Tasks;
using GraphQL;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.CoreModule.Core.Currency;
using VirtoCommerce.Xapi.Core.Extensions;
using VirtoCommerce.Xapi.Core.Security.Authorization;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XapiExample.ExperienceApi.Authorization;
using VirtoCommerce.XOrder.Data.Queries.BaseQueries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQueryBuilder : BaseSearchOrderQueryBuilder<PendingForApprovalsQuery>
{
    protected override string Name => "pendingForApprovals";

    private readonly IAuthorizationService _authorizationService;

    public PendingForApprovalsQueryBuilder(IMediator mediator, IAuthorizationService authorizationService, ICurrencyService currencyService, IUserManagerCore userManagerCore)
        : base(mediator, authorizationService, currencyService, userManagerCore)
    {
        _authorizationService = authorizationService;
    }

    protected override async Task Authorize(IResolveFieldContext context, object resource, IAuthorizationRequirement requirement)
    {
        var authorizationResult = await _authorizationService.AuthorizeAsync(context.GetCurrentPrincipal(), resource, new PendingOrderAuthorizationRequirement());

        if (!authorizationResult.Succeeded)
        {
            throw AuthorizationError.Forbidden();
        }
    }
}
