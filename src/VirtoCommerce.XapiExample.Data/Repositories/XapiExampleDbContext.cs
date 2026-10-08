using System.Reflection;
using Microsoft.EntityFrameworkCore;
using VirtoCommerce.Platform.Data.Infrastructure;

namespace VirtoCommerce.XapiExample.Data.Repositories;

public class XapiExampleDbContext : DbContextBase
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
        base.OnModelCreating(modelBuilder);

        //modelBuilder.Entity<XapiExampleEntity>().ToTable("XapiExample").HasKey(x => x.Id);
        //modelBuilder.Entity<XapiExampleEntity>().Property(x => x.Id).HasMaxLength(IdLength).ValueGeneratedOnAdd();

        switch (Database.ProviderName)
        {
            case "Pomelo.EntityFrameworkCore.MySql":
                modelBuilder.ApplyConfigurationsFromAssembly(Assembly.Load("VirtoCommerce.XapiExample.Data.MySql"));
                break;
            case "Npgsql.EntityFrameworkCore.PostgreSQL":
                modelBuilder.ApplyConfigurationsFromAssembly(Assembly.Load("VirtoCommerce.XapiExample.Data.PostgreSql"));
                break;
            case "Microsoft.EntityFrameworkCore.SqlServer":
                modelBuilder.ApplyConfigurationsFromAssembly(Assembly.Load("VirtoCommerce.XapiExample.Data.SqlServer"));
                break;
        }
    }
}
