using System.Threading;
using System.Threading.Tasks;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.Data.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQueryHandler : IQueryHandler<PendingForApprovalsQuery, CustomerOrderSearchResult>
{
    readonly IOrderApproveService _orderApproveService;

    public PendingForApprovalsQueryHandler(IOrderApproveService orderApproveService)
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
