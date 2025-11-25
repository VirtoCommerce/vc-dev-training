using System.Collections.Generic;
using GraphQL;
using GraphQL.Types;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Xapi.Core.BaseQueries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchQuery<CustomerOrderSearchResult>
{
    public string ApproverId { get; set; }

    public override IEnumerable<QueryArgument> GetArguments()
    {
        foreach (var argument in base.GetArguments())
        {
            yield return argument;
        }

        yield return Argument<StringGraphType>(nameof(ApproverId));
    }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetArgument<string>(nameof(ApproverId));
    }
}
