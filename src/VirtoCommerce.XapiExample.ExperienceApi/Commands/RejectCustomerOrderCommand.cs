using System.Threading;
using System.Threading.Tasks;
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
using VirtoCommerce.XOrder.Core.Services;
using VirtoCommerce.XOrder.Data.Authorization;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommand : ICommand<ExtendedCustomerOrderAggregate>
{
    public string OrderId { get; set; }
    public string RejectionReason { get; set; }
}

public class RejectCustomerOrderCommandBuilder : CommandBuilder<RejectCustomerOrderCommand, ExtendedCustomerOrderAggregate, InputRejectCustomerOrderCommandType, ExtendedCustomerOrderType>
{
    private readonly ICustomerOrderService _customerOrderService;

    public RejectCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService, ICustomerOrderService customerOrderService)
        : base(mediator, authorizationService)
    {
        _customerOrderService = customerOrderService;
    }

    protected override async Task BeforeMediatorSend(IResolveFieldContext<object> context, RejectCustomerOrderCommand request)
    {
        var order = await _customerOrderService.GetNoCloneAsync(request.OrderId, CustomerOrderResponseGroup.Default.ToString());
        await Authorize(context, order, new CanAccessOrderAuthorizationRequirement());

        await base.BeforeMediatorSend(context, request);
    }

    protected override string Name => "rejectOrderActual";
}

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

public class InputRejectCustomerOrderCommandType : InputObjectGraphType<RejectCustomerOrderCommand>
{
    public InputRejectCustomerOrderCommandType()
    {
        Name = "RejectCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be rejected.");
        Field(x => x.RejectionReason).Description("The reason for rejecting the customer order.");
    }
}
