using System.Threading;
using System.Threading.Tasks;
using GraphQL.Types;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.Data.Services;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommand : ICommand<CustomerOrder>
{
    public string OrderId { get; set; }
}

public class RejectCustomerOrderCommandBuilder : CommandBuilder<RejectCustomerOrderCommand, CustomerOrder, InputRejectCustomerOrderCommandType, DemoCustomerOrderType>
{
    protected override string Name => "rejectOrder";

    public RejectCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }
}

public class RejectCustomerOrderCommandHandler : IRequestHandler<RejectCustomerOrderCommand, CustomerOrder>
{
    private readonly IOrderApproveService _orderService;


    public RejectCustomerOrderCommandHandler(IOrderApproveService orderService)
    {
        _orderService = orderService;
    }

    public async Task<CustomerOrder> Handle(RejectCustomerOrderCommand request, CancellationToken cancellationToken)
    {
        var result = await _orderService.RejectOrderAsync(request.OrderId);
        return result;
    }
}

public class InputRejectCustomerOrderCommandType : InputObjectGraphType<RejectCustomerOrderCommand>
{
    public InputRejectCustomerOrderCommandType()
    {
        Name = "InputRejectCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be rejected.");
    }
}
