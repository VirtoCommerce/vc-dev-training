using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using VirtoCommerce.XapiTraning.Data.Repositories;

namespace VirtoCommerce.XapiTraning.Data.PostgreSql;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<XapiTraningDbContext>
{
    public XapiTraningDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<XapiTraningDbContext>();
        var connectionString = args.Length != 0 ? args[0] : "Server=localhost;Username=virto;Password=virto;Database=VirtoCommerce3;";

        builder.UseNpgsql(
            connectionString,
            options => options.MigrationsAssembly(typeof(PostgreSqlDataAssemblyMarker).Assembly.GetName().Name));

        return new XapiTraningDbContext(builder.Options);
    }
}
