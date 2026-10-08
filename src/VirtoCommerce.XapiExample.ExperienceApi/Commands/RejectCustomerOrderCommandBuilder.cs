using MediatR;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

public class RejectCustomerOrderCommandBuilder : CommandBuilder<RejectCustomerOrderCommand, CustomerOrder, InputRejectCustomerOrderCommandType, DemoCustomerOrderType>
{
    protected override string Name => "rejectOrder";

    public RejectCustomerOrderCommandBuilder(IMediator mediator, IAuthorizationService authorizationService)
        : base(mediator, authorizationService)
    {
    }
}
