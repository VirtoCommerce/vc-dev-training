using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class ApproveCustomerOrderCommandBuilder : CommandBuilder<ApproveCustomerOrderCommand, CustomerOrder, InputApproveCustomerOrderCommandType, DemoCustomerOrderType>
{
    protected override string Name => "approveOrder";

    public ApproveCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }
}
