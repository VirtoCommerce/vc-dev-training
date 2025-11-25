using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.OrdersModule.Core.Search.Indexed;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.SearchModule.Core.Services;
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

    public override Task<SearchOrderResponse> Handle(SearchCustomerOrderQuery request, CancellationToken cancellationToken)
    {
        return base.Handle(request, cancellationToken);
    }

    protected override CustomerOrderIndexedSearchCriteria GetOrderIndexedSearchCriteria(SearchOrderQuery request)
    {
        var criteria = base.GetOrderIndexedSearchCriteria(request);

        if (request is not ExtendedSearchCustomerOrderQuery extendedQuery)
        {
            return criteria;
        }

        criteria = AddRejectionReason(criteria, extendedQuery.RejectionReason);
        return criteria;
    }

    public CustomerOrderIndexedSearchCriteria AddRejectionReason(CustomerOrderIndexedSearchCriteria searchCriteria, string rejectionReason)
    {
        if (!string.IsNullOrEmpty(rejectionReason))
        {
            searchCriteria.Keyword = $"rejectionreason:\"{rejectionReason}\" {searchCriteria.Keyword}";
        }

        return searchCriteria;
    }
}
