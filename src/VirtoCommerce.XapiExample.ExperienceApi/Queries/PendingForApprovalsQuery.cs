using GraphQL;
using VirtoCommerce.Xapi.Core.Extensions;
using VirtoCommerce.XOrder.Core.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Queries;

public class PendingForApprovalsQuery : SearchOrderQuery
{
    public string ApproverId { get; set; }

    public override void Map(IResolveFieldContext context)
    {
        base.Map(context);

        ApproverId = context.GetCurrentUserId();
    }
}
