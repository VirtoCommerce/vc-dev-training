using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using VirtoCommerce.XapiTraning.Data.Repositories;

namespace VirtoCommerce.XapiTraning.Data.SqlServer;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<XapiTraningDbContext>
{
    public XapiTraningDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<XapiTraningDbContext>();
        var connectionString = args.Length != 0 ? args[0] : "Server=(local);User=virto;Password=virto;Database=VirtoCommerce3;";

        builder.UseSqlServer(
            connectionString,
            options => options.MigrationsAssembly(typeof(SqlServerDataAssemblyMarker).Assembly.GetName().Name));

        return new XapiTraningDbContext(builder.Options);
    }
}
