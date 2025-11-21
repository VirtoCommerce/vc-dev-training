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

public class ApproveCustomerOrderCommand : ICommand<CustomerOrder>
{
    public string OrderId { get; set; }
}

public class ApproveCustomerOrderCommandBuilder : CommandBuilder<ApproveCustomerOrderCommand, CustomerOrder, InputApproveCustomerOrderCommandType, DemoCustomerOrderType>
{
    protected override string Name => "approveOrder";

    public ApproveCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }
}

public class ApproveCustomerOrderCommandHandler : IRequestHandler<ApproveCustomerOrderCommand, CustomerOrder>
{
    private readonly IOrderApproveService _orderService;


    public ApproveCustomerOrderCommandHandler(IOrderApproveService orderService)
    {
        _orderService = orderService;
    }

    public async Task<CustomerOrder> Handle(ApproveCustomerOrderCommand request, CancellationToken cancellationToken)
    {
        var result = await _orderService.ApproveOrderAsync(request.OrderId);
        return result;
    }
}

public class InputApproveCustomerOrderCommandType : InputObjectGraphType<ApproveCustomerOrderCommand>
{
    public InputApproveCustomerOrderCommandType()
    {
        Name = "InputApproveCustomerOrderCommand";

        Field(x => x.OrderId).Description("The ID of the customer order to be approved.");
    }
}
