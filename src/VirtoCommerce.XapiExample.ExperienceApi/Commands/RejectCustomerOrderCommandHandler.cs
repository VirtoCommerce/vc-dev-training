using System.Threading;
using System.Threading.Tasks;
using MediatR;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.XapiExample.Data.Services;

namespace VirtoCommerce.XapiExample.ExperienceApi.Commands;

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
