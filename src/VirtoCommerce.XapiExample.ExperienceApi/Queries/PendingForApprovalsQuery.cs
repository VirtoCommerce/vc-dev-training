using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GraphQL;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.CoreModule.Core.Currency;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Xapi.Core.Extensions;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.Xapi.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XOrder.Core.Queries;
using VirtoCommerce.XOrder.Core.Services;
using VirtoCommerce.XOrder.Data.Queries.BaseQueries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchOrderQuery
{
    public string ApproverId { get; set; }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetCurrentUserId();
    }
}

public class PendingForApprovalsQueryBuilder : BaseSearchOrderQueryBuilder<PendingForApprovalsQuery>
{
    protected override string Name => "pendingForApprovalsActual";

    public PendingForApprovalsQueryBuilder(IMediator mediator, IAuthorizationService authorizationService, ICurrencyService currencyService, IUserManagerCore userManagerCore)
        : base(mediator, authorizationService, currencyService, userManagerCore)
    {
    }
}

public class PendingForApprovalsQueryHandler : IQueryHandler<PendingForApprovalsQuery, SearchOrderResponse>
{
    private readonly ICustomerOrderSearchService _searchService;
    private readonly ICustomerOrderAggregateRepository _orderAggregateRepository;

    public PendingForApprovalsQueryHandler(ICustomerOrderSearchService searchService, ICustomerOrderAggregateRepository orderAggregateRepository)
    {
        _searchService = searchService;
        _orderAggregateRepository = orderAggregateRepository;
    }

    public async Task<SearchOrderResponse> Handle(PendingForApprovalsQuery request, CancellationToken cancellationToken)
    {
        var response = new SearchOrderResponse()
        {
            Facets = [],
        };

        var criteria = new ExtendedCustomerOrderSearchCriteria
        {
            CustomerId = request.ApproverId,
            Skip = request.Skip,
            Take = request.Take,
        };

        var searchResult = await _searchService.SearchAsync(criteria);
        var orderAggregates = await _orderAggregateRepository.GetAggregatesFromOrdersAsync(searchResult.Results.ToList(), request.CultureName);

        response.TotalCount = searchResult.TotalCount;
        response.Results = orderAggregates;

        return response;
    }
}
