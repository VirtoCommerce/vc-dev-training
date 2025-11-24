using Microsoft.EntityFrameworkCore;
using VirtoCommerce.OrdersModule.Data.Repositories;
using VirtoCommerce.XapiExample.Data.Models;

namespace VirtoCommerce.XapiExample.Data.Repositories;

public class XapiExampleDbContext : OrderDbContext
{
    public XapiExampleDbContext(DbContextOptions<XapiExampleDbContext> options)
        : base(options)
    {
    }

    protected XapiExampleDbContext(DbContextOptions options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ExtendedCustomerOrderEntity>();

        base.OnModelCreating(modelBuilder);
    }
}
