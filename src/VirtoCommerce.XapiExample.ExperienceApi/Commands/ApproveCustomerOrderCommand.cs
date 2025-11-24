using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using GraphQL;
using GraphQL.Types;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;
using VirtoCommerce.XapiExample.ExperienceApi.Validators;
using VirtoCommerce.XOrder.Core.Services;
using VirtoCommerce.XOrder.Data.Authorization;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ApproveCustomerOrderCommand : ICommand<ExtendedCustomerOrderAggregate>
{
    public string OrderId { get; set; }
}

public class ApproveCustomerOrderCommandBuilder : CommandBuilder<ApproveCustomerOrderCommand, ExtendedCustomerOrderAggregate, InputApproveCustomerOrderCommandType, ExtendedCustomerOrderType>
{
    private readonly ICustomerOrderService _customerOrderService;

    public ApproveCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService, ICustomerOrderService customerOrderService)
        : base(mediator, authorizationService)
    {
        _customerOrderService = customerOrderService;
    }

    protected override string Name => "approveOrder";

    protected override async Task BeforeMediatorSend(IResolveFieldContext<object> context, ApproveCustomerOrderCommand request)
    {
        var order = await _customerOrderService.GetNoCloneAsync(request.OrderId, CustomerOrderResponseGroup.Default.ToString());
        await Authorize(context, order, new CanAccessOrderAuthorizationRequirement());

        await base.BeforeMediatorSend(context, request);
    }
}

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

public class InputApproveCustomerOrderCommandType : InputObjectGraphType<ApproveCustomerOrderCommand>
{
    public InputApproveCustomerOrderCommandType()
    {
        Name = "ApproveCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be approved.");
    }
}
