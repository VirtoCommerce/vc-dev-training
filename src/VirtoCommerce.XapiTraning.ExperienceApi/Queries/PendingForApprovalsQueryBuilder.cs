using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQueryBuilder : SearchQueryBuilder<PendingForApprovalsQuery, CustomerOrderSearchResult, CustomerOrder, DemoCustomerOrderType>
{
    public PendingForApprovalsQueryBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }

    protected override string Name => "pendingForApprovals";
}
