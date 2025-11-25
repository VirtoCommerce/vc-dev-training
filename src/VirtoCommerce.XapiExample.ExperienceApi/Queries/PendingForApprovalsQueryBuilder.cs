using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.CoreModule.Core.Currency;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XOrder.Data.Queries.BaseQueries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQueryBuilder : BaseSearchOrderQueryBuilder<PendingForApprovalsQuery>
{
    protected override string Name => "pendingForApprovals";

    public PendingForApprovalsQueryBuilder(IMediator mediator, IAuthorizationService authorizationService, ICurrencyService currencyService, IUserManagerCore userManagerCore)
        : base(mediator, authorizationService, currencyService, userManagerCore)
    {
    }
}
