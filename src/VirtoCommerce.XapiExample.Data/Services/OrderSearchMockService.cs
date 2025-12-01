using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Platform.Core.Common;

namespace VirtoCommerce.XapiExample.Data.Services
{
    public interface IOrderApproveService
    {
        Task<CustomerOrderSearchResult> SearchAsync(CustomerOrderSearchCriteria criteria, bool clone = true);

        Task<CustomerOrder> ApproveOrderAsync(string orderId);
        Task<CustomerOrder> RejectOrderAsync(string orderId);
    }

    public class OrderApproveMockService : IOrderApproveService
    {
        public static List<CustomerOrder> Entities { get; set; } = new List<CustomerOrder>
        {
            new CustomerOrder { Id = "1", StoreId = "Electronics", IsApproved = false, Status = "Approved", CustomerId = "User1" },
            new CustomerOrder { Id = "2", StoreId = "Electronics", IsApproved = false, Status = "New", CustomerId = "User1" },
            new CustomerOrder { Id = "3", StoreId = "Electronics", IsApproved = false, Status = "New", CustomerId = "User2" },
            new CustomerOrder { Id = "4", StoreId = "B2B", IsApproved = false, Status = "New", CustomerId = "User2" },
            new CustomerOrder { Id = "5", StoreId = "B2B", IsApproved = false, Status = "New", CustomerId = "User2" },
            new CustomerOrder { Id = "6", StoreId = "B2B", IsApproved = false, Status = "Rejected", CustomerId = "User3" },
            new CustomerOrder { Id = "7", StoreId = "B2B", IsApproved = false, Status = "Approved", CustomerId = "User3" },
        };

        public Task<CustomerOrderSearchResult> SearchAsync(CustomerOrderSearchCriteria criteria, bool clone = true)
        {
            var resultEntities = Entities.AsQueryable();

            if (!string.IsNullOrEmpty(criteria.CustomerId))
            {
                resultEntities = resultEntities.Where(x => x.CustomerId.EqualsIgnoreCase(criteria.CustomerId));
            }

            var result = new CustomerOrderSearchResult
            {
                Results = resultEntities.ToList(),
            };

            result.TotalCount = result.Results.Count;

            return Task.FromResult(result);
        }

        public Task<CustomerOrder> ApproveOrderAsync(string orderId)
        {
            var entity = Entities.FirstOrDefault(x => x.Id == orderId);
            if (entity != null)
            {
                entity.IsApproved = true;
                entity.Status = "Approved";
            }
            return Task.FromResult(entity);
        }

        public Task<CustomerOrder> RejectOrderAsync(string orderId)
        {
            var entity = Entities.FirstOrDefault(x => x.Id == orderId);
            if (entity != null)
            {
                entity.IsApproved = false;
                entity.Status = "Rejected";
            }

            return Task.FromResult(entity);
        }
    }
}
