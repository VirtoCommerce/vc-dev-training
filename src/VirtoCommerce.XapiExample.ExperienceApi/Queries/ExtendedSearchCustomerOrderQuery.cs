using System.Collections.Generic;
using GraphQL;
using GraphQL.Types;
using VirtoCommerce.XOrder.Core.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class ExtendedSearchCustomerOrderQuery : SearchCustomerOrderQuery
{
    public string RejectionReason { get; set; }

    public override IEnumerable<QueryArgument> GetArguments()
    {
        foreach (var argument in base.GetArguments())
        {
            yield return argument;
        }

        yield return Argument<StringGraphType>(nameof(RejectionReason));
    }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        RejectionReason = context.GetArgument<string>(nameof(RejectionReason));
    }
}
