using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using MediatR;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XapiExample.ExperienceApi.Validators;
using VirtoCommerce.XOrder.Core.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ApproveCustomerOrderCommandHandler : IRequestHandler<ApproveCustomerOrderCommand, ExtendedCustomerOrderAggregate>
{
    private readonly ICustomerOrderAggregateRepository _customerOrderAggregateRepository;
    private readonly ICustomerOrderService _customerOrderService;

    public ApproveCustomerOrderCommandHandler(ICustomerOrderService service, ICustomerOrderAggregateRepository customerOrderAggregateRepository)
    {
        _customerOrderService = service;
        _customerOrderAggregateRepository = customerOrderAggregateRepository;
    }

    public async Task<ExtendedCustomerOrderAggregate> Handle(ApproveCustomerOrderCommand request, CancellationToken cancellationToken)
    {
        var orderAggregate = await _customerOrderAggregateRepository.GetOrderByIdAsync(request.OrderId);

        var validationContext = new OrderValidatonContext(orderAggregate);
        AbstractTypeFactory<OrderAppovedValidtor>.TryCreateInstance().ValidateAndThrow(validationContext);

        if (orderAggregate is ExtendedCustomerOrderAggregate extendedCustomerOrderAggregate)
        {
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.Status = "Approved";
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.IsApproved = true;
            extendedCustomerOrderAggregate.ExtendedCustomerOrder.RejectionReason = null;

            await _customerOrderService.SaveChangesAsync([extendedCustomerOrderAggregate.ExtendedCustomerOrder]);

            return extendedCustomerOrderAggregate;
        }

        return null;
    }
}
