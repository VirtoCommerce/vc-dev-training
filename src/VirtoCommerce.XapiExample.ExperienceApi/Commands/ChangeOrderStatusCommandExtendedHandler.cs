using System.Threading;
using System.Threading.Tasks;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XOrder.Core.Commands;
using VirtoCommerce.XOrder.Core.Services;
using VirtoCommerce.XOrder.Data.Commands;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ChangeOrderStatusCommandExtendedHandler : ChangeOrderStatusCommandHandler
{
    private readonly ICustomerOrderAggregateRepository _customerOrderAggregateRepository;
    private readonly ICustomerOrderService _customerOrderService;

    public ChangeOrderStatusCommandExtendedHandler(ICustomerOrderService customerOrderService, ICustomerOrderAggregateRepository customerOrderAggregateRepository) : base(customerOrderService, customerOrderAggregateRepository)
    {
        _customerOrderService = customerOrderService;
        _customerOrderAggregateRepository = customerOrderAggregateRepository;
    }

    public override async Task<bool> Handle(ChangeOrderStatusCommand request, CancellationToken cancellationToken)
    {
        var orderAggregate = await _customerOrderAggregateRepository.GetOrderByIdAsync(request.OrderId);

        orderAggregate.ChangeOrderStatus(request.Status);

        if (orderAggregate is ExtendedCustomerOrderAggregate extendedCustomerOrderAggregate
            && request is ChangeOrderStatusCommandExtended extendedRequest
            && request.Status.EqualsIgnoreCase("Rejected"))
        {
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.RejectionReason = extendedRequest.RejectionReason;
        }

        await _customerOrderService.SaveChangesAsync(new[] { orderAggregate.Order });

        return true;
    }
}
