using System;
using System.Collections.Generic;
using GraphQL.MicrosoftDI;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VirtoCommerce.CoreModule.Core.Common;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.OrdersModule.Data.Model;
using VirtoCommerce.OrdersModule.Data.Repositories;
using VirtoCommerce.Platform.Core.Common;
using VirtoCommerce.Platform.Core.Modularity;
using VirtoCommerce.Platform.Core.Settings;
using VirtoCommerce.Platform.Data.MySql.Extensions;
using VirtoCommerce.Platform.Data.PostgreSql.Extensions;
using VirtoCommerce.Platform.Data.SqlServer.Extensions;
using VirtoCommerce.SearchModule.Core.Extensions;
using VirtoCommerce.SearchModule.Core.Model;
using VirtoCommerce.Xapi.Core.Extensions;
using VirtoCommerce.Xapi.Core.Infrastructure;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XapiExample.Data.Models;
using VirtoCommerce.XapiExample.Data.MySql;
using VirtoCommerce.XapiExample.Data.PostgreSql;
using VirtoCommerce.XapiExample.Data.Repositories;
using VirtoCommerce.XapiExample.Data.Services;
using VirtoCommerce.XapiExample.Data.SqlServer;
using VirtoCommerce.XapiExample.ExperienceApi;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XapiExample.ExperienceApi.Commands;
using VirtoCommerce.XapiExample.ExperienceApi.Queries;
using VirtoCommerce.XapiExample.ExperienceApi.Schemas;
using VirtoCommerce.XOrder.Core;
using VirtoCommerce.XOrder.Core.Commands;
using VirtoCommerce.XOrder.Core.Queries;
using VirtoCommerce.XOrder.Core.Schemas;

namespace VirtoCommerce.XapiExample.Web;

public class Module : IModule, IHasConfiguration
{
    public ManifestModuleInfo ModuleInfo { get; set; }
    public IConfiguration Configuration { get; set; }

    public void Initialize(IServiceCollection serviceCollection)
    {
        serviceCollection.AddDbContext<XapiExampleDbContext>(options =>
        {
            var databaseProvider = Configuration.GetValue("DatabaseProvider", "SqlServer");
            var connectionString = Configuration.GetConnectionString(ModuleInfo.Id) ?? Configuration.GetConnectionString("VirtoCommerce");

            switch (databaseProvider)
            {
                case "MySql":
                    options.UseMySqlDatabase(connectionString, typeof(MySqlDataAssemblyMarker), Configuration);
                    break;
                case "PostgreSql":
                    options.UsePostgreSqlDatabase(connectionString, typeof(PostgreSqlDataAssemblyMarker), Configuration);
                    break;
                default:
                    options.UseSqlServerDatabase(connectionString, typeof(SqlServerDataAssemblyMarker), Configuration);
                    break;
            }
        });

        // override models and entities
        AbstractTypeFactory<IOperation>.OverrideType<CustomerOrder, ExtendedCustomerOrder>();
        AbstractTypeFactory<CustomerOrderEntity>.OverrideType<CustomerOrderEntity, ExtendedCustomerOrderEntity>();
        AbstractTypeFactory<CustomerOrder>.OverrideType<CustomerOrder, ExtendedCustomerOrder>()
            .WithFactory(() => new ExtendedCustomerOrder { OperationType = "CustomerOrder" });

        // extend aggregate
        serviceCollection.AddTransient<ExtendedCustomerOrderAggregate>();
        serviceCollection.AddTransient<Func<CustomerOrderAggregate>>(provider => () => provider.CreateScope().ServiceProvider.GetRequiredService<ExtendedCustomerOrderAggregate>());

        serviceCollection.AddSingleton<ExtendedCustomerOrderDocumentBuilder>();
        serviceCollection.AddTransient<IOrderRepository, XapiExampleRepository>();
        serviceCollection.AddTransient<ICustomerOrderSearchService, ExtendedCustomerOrderSearchService>();

        // Register GraphQL schema
        _ = new GraphQLBuilder(serviceCollection, builder =>
        {
            builder.AddSchema(serviceCollection, typeof(XapiAssemblyMarker));
        });

        // types
        serviceCollection.AddSchemaType<ExtendedCustomerOrderType>().OverrideType<CustomerOrderType, ExtendedCustomerOrderType>(); // override CustomerOrder graph type
        serviceCollection.AddSchemaType<InputChangeOrderStatusExtendedType>().OverrideType<InputChangeOrderStatusType, InputChangeOrderStatusExtendedType>(); // override input type

        // queries
        serviceCollection.OverrideQueryType<SearchCustomerOrderQuery, ExtendedSearchCustomerOrderQuery>().WithQueryHandler<ExtendedSearchCustomerOrderQueryHandler>(); // override handler and query argumets by using builder pattern

        // mutations
        serviceCollection.OverrideCommandType<ChangeOrderStatusCommand, ChangeOrderStatusCommandExtended>().WithCommandHandler<ChangeOrderStatusCommandExtendedHandler>(); // override handler and command

        serviceCollection.AddSingleton<ScopedSchemaFactory<XapiAssemblyMarker>>();
    }

    public void PostInitialize(IApplicationBuilder appBuilder)
    {
        var serviceProvider = appBuilder.ApplicationServices;

        /*
        // Register settings
        var settingsRegistrar = serviceProvider.GetRequiredService<ISettingsRegistrar>();
        settingsRegistrar.RegisterSettings(ModuleConstants.Settings.AllSettings, ModuleInfo.Id);

        // Register permissions
        var permissionsRegistrar = serviceProvider.GetRequiredService<IPermissionsRegistrar>();
        permissionsRegistrar.RegisterPermissions(ModuleInfo.Id, "XapiExample", ModuleConstants.Security.Permissions.AllPermissions);
        */

        // re register document builder
        var documentConfigurations = appBuilder.ApplicationServices.GetService<IEnumerable<IndexDocumentConfiguration>>();
        if (documentConfigurations.GetConfiguration(OrdersModule.Core.ModuleConstants.OrderIndexDocumentType, out var config))
        {
            config.DocumentSource.DocumentBuilder = serviceProvider.GetRequiredService<ExtendedCustomerOrderDocumentBuilder>();
        }

        // Register partial GraphQL schema
        appBuilder.UseScopedSchema<XapiAssemblyMarker>("xapi-example");

        // Apply migrations
        using var serviceScope = serviceProvider.CreateScope();
        using var dbContext = serviceScope.ServiceProvider.GetRequiredService<XapiExampleDbContext>();
        dbContext.Database.Migrate();
    }

    public void Uninstall()
    {
        // Nothing to do here
    }
}
