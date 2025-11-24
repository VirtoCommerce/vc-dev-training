using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using VirtoCommerce.OrdersModule.Core.Search.Indexed;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.SearchModule.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XOrder.Core.Queries;
using VirtoCommerce.XOrder.Core.Services;
using VirtoCommerce.XOrder.Data.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class ExtendedSearchCustomerOrderQueryHandler : SearchOrderQueryHandler
{
    private readonly ICustomerOrderSearchService _searchService;
    private readonly ICustomerOrderAggregateRepository _orderAggregateRepository;

    public ExtendedSearchCustomerOrderQueryHandler(ISearchPhraseParser searchPhraseParser, ICustomerOrderAggregateRepository customerOrderAggregateRepository, IIndexedCustomerOrderSearchService customerOrderSearchService, IMapper mapper, ICustomerOrderSearchService searchService)
        : base(searchPhraseParser, customerOrderAggregateRepository, customerOrderSearchService, mapper)
    {
        _searchService = searchService;
        _orderAggregateRepository = customerOrderAggregateRepository;
    }

    public override async Task<SearchOrderResponse> Handle(SearchCustomerOrderQuery request, CancellationToken cancellationToken)
    {
        var response = new SearchOrderResponse()
        {
            Facets = [],
        };

        if (request is not ExtendedSearchCustomerOrderQuery extendedQuery)
        {
            return response;
        }

        var criteria = new ExtendedCustomerOrderSearchCriteria
        {
            CustomerId = extendedQuery.CustomerId,
            RejectionReason = extendedQuery.RejectionReason,
            Skip = extendedQuery.Skip,
            Take = extendedQuery.Take,
        };

        var searchResult = await _searchService.SearchAsync(criteria);
        var orderAggregates = await _orderAggregateRepository.GetAggregatesFromOrdersAsync(searchResult.Results.ToList(), request.CultureName);

        response.TotalCount = searchResult.TotalCount;
        response.Results = orderAggregates;

        return response;
    }
}
