using System.Collections.Generic;
using GraphQL;
using GraphQL.Types;
using VirtoCommerce.Xapi.Core.Extensions;
using VirtoCommerce.XOrder.Core.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchOrderQuery
{
    public string ApproverId { get; set; }

    public string CustomerId { get; set; }

    public override IEnumerable<QueryArgument> GetArguments()
    {
        foreach (var argument in base.GetArguments())
        {
            yield return argument;
        }

        yield return Argument<StringGraphType>(nameof(ApproverId));
        yield return Argument<StringGraphType>(nameof(CustomerId));
    }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetArgument<string>(nameof(ApproverId)) ?? context.GetCurrentUserId();
        CustomerId = context.GetArgument<string>(nameof(CustomerId));
    }
}
