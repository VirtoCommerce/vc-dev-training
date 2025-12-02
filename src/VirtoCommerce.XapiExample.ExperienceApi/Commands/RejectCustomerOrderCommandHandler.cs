using System.Threading;
using System.Threading.Tasks;
using MediatR;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XOrder.Core.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommandHandler : IRequestHandler<RejectCustomerOrderCommand, ExtendedCustomerOrderAggregate>
{
    private readonly ICustomerOrderAggregateRepository _customerOrderAggregateRepository;
    private readonly ICustomerOrderService _customerOrderService;

    public RejectCustomerOrderCommandHandler(ICustomerOrderService service, ICustomerOrderAggregateRepository customerOrderAggregateRepository)
    {
        _customerOrderService = service;
        _customerOrderAggregateRepository = customerOrderAggregateRepository;
    }

    public async Task<ExtendedCustomerOrderAggregate> Handle(RejectCustomerOrderCommand request, CancellationToken cancellationToken)
    {
        var orderAggregate = await _customerOrderAggregateRepository.GetOrderByIdAsync(request.OrderId);

        if (orderAggregate is ExtendedCustomerOrderAggregate extendedCustomerOrderAggregate)
        {
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.Status = "Rejected";
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.IsApproved = false;
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.RejectionReason = request.RejectionReason;

            await _customerOrderService.SaveChangesAsync([extendedCustomerOrderAggregate.ExtendedCustomerOrder]);

            return extendedCustomerOrderAggregate;
        }

        return null;
    }
}
