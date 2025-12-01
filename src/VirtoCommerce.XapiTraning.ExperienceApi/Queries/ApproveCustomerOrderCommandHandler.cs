using System.Threading;
using System.Threading.Tasks;
using MediatR;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.XapiExample.Data.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

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
