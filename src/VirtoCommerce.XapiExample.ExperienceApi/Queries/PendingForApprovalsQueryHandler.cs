using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XOrder.Core.Queries;
using VirtoCommerce.XOrder.Core.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

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
            Status = "PendingApproval",
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
