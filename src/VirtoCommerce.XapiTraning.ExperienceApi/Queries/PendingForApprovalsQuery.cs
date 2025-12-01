using System.Collections.Generic;
using GraphQL;
using GraphQL.Types;
using VirtoCommerce.OrdersModule.Core.Model.Search;
using VirtoCommerce.Xapi.Core.BaseQueries;
using VirtoCommerce.Xapi.Core.Extensions;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchQuery<CustomerOrderSearchResult>
{
    public string ApproverId { get; set; }
    public string StoreId { get; set; }
    public string CultureName { get; set; }

    //public string UserId { get; set; }

    public override IEnumerable<QueryArgument> GetArguments()
    {
        foreach (var argument in base.GetArguments())
        {
            yield return argument;
        }

        yield return Argument<StringGraphType>(nameof(ApproverId));
        yield return Argument<NonNullGraphType<StringGraphType>>(nameof(StoreId));
        yield return Argument<NonNullGraphType<StringGraphType>>(nameof(CultureName));
    }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetArgument<string>(nameof(ApproverId));
        StoreId = context.GetArgument<string>(nameof(StoreId));
        CultureName = context.GetArgument<string>(nameof(CultureName));
        //UserId = context.GetCurrentUserId();
    }
}
