using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using VirtoCommerce.XapiExample.Data.Repositories;

namespace VirtoCommerce.XapiExample.Data.PostgreSql;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<XapiExampleDbContext>
{
    public XapiExampleDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<XapiExampleDbContext>();
        var connectionString = args.Length != 0 ? args[0] : "Server=localhost;Username=virto;Password=virto;Database=VirtoCommerce3;";

        builder.UseNpgsql(
            connectionString,
            options => options.MigrationsAssembly(typeof(PostgreSqlDataAssemblyMarker).Assembly.GetName().Name));

        return new XapiExampleDbContext(builder.Options);
    }
}
