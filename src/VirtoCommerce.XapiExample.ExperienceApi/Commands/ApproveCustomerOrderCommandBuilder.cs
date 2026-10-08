using System.Threading.Tasks;
using GraphQL;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;
using VirtoCommerce.XOrder.Data.Authorization;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

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
