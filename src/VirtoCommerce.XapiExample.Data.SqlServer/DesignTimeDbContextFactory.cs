using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using VirtoCommerce.XapiExample.Data.Repositories;

namespace VirtoCommerce.XapiExample.Data.SqlServer;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<XapiExampleDbContext>
{
    public XapiExampleDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<XapiExampleDbContext>();
        var connectionString = args.Length != 0 ? args[0] : "Server=(local);User=virto;Password=virto;Database=VirtoCommerce3;";

        builder.UseSqlServer(
            connectionString,
            options => options.MigrationsAssembly(typeof(SqlServerDataAssemblyMarker).Assembly.GetName().Name));

        return new XapiExampleDbContext(builder.Options);
    }
}
