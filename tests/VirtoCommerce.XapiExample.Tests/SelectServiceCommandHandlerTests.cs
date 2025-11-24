using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Moq;
using VirtoCommerce.OrdersModule.Core.Model;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.OrdersModule.Core.Services;
using VirtoCommerce.XapiExample.Core.Models;
using VirtoCommerce.XapiExample.ExperienceApi.Aggregates;
using VirtoCommerce.XapiExample.ExperienceApi.Queries;
using VirtoCommerce.XOrder.Core;
using VirtoCommerce.XOrder.Core.Services;
using Xunit;

namespace VirtoCommerce.XapiExample.Tests;

[Trait("Category", "Unit")]
public class SelectServiceCommandHandlerTests
{
    [Fact]
    public async Task Handle_ServiceExists_ShouldSetAndReturnIsSelected()
    {
        // Arragne
        var customerOrder = new ExtendedCustomerOrder
        {
            Id = Guid.NewGuid().ToString(),
        };
        var customerOrderAggregate = new ExtendedCustomerOrderAggregate(null, null).GrabCustomerOrder(customerOrder, null, null);

        var searchServiceMock = new Mock<ICustomerOrderSearchService>();
        searchServiceMock
            .Setup(x => x.SearchAsync(It.IsAny<CustomerOrderSearchCriteria>(), true))
            .ReturnsAsync(new CustomerOrderSearchResult
            {
                TotalCount = 1,
                Results = [
                    customerOrder
                ]
            });

        var aggregateRepositoryMock = new Mock<ICustomerOrderAggregateRepository>();
        aggregateRepositoryMock
            .Setup(x => x.GetAggregatesFromOrdersAsync(It.IsAny<IList<CustomerOrder>>(), It.IsAny<string>()))
            .ReturnsAsync(new List<CustomerOrderAggregate> { customerOrderAggregate });

        var request = new ExtendedSearchCustomerOrderQuery()
        {
        };

        var handler = new ExtendedSearchCustomerOrderQueryHandler(null, aggregateRepositoryMock.Object, null, null, searchServiceMock.Object);

        // Act
        var results = await handler.Handle(request, CancellationToken.None);

        // Assert
        Assert.True((results.Results.FirstOrDefault() as ExtendedCustomerOrderAggregate).ExtendedCustomerOrder == customerOrder);
    }
}
