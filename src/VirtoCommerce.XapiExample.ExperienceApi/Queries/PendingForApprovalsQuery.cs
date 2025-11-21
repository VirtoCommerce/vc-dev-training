using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.Data.Services;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchQuery<CustomerOrderSearchResult>
{
    public string ApproverId { get; set; }

    public override IEnumerable<QueryArgument> GetArguments()
    {
        foreach (var argument in base.GetArguments())
        {
            yield return argument;
        }

        yield return Argument<StringGraphType>(nameof(ApproverId));
    }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetArgument<string>(nameof(ApproverId));
    }
}

public class PendingForApprovalsBuilder : SearchQueryBuilder<PendingForApprovalsQuery, CustomerOrderSearchResult, CustomerOrder, DemoCustomerOrderType>
{
    public PendingForApprovalsBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }

    protected override string Name => "pendingForApprovals";
}

public class PendingForApprovalsHandler : IQueryHandler<PendingForApprovalsQuery, CustomerOrderSearchResult>
{
    readonly IOrderApproveService _orderApproveService;

    public PendingForApprovalsHandler(IOrderApproveService orderApproveService)
    {
        _orderApproveService = orderApproveService;
    }

    public async Task<CustomerOrderSearchResult> Handle(PendingForApprovalsQuery request, CancellationToken cancellationToken)
    {
        var criteria = new CustomerOrderSearchCriteria
        {
            CustomerId = request.ApproverId,
        };

        return await _orderApproveService.SearchAsync(criteria);
    }
}
