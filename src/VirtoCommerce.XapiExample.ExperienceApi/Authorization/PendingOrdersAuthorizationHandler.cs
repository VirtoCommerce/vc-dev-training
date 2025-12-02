using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using VirtoCommerce.CustomerModule.Core.Model;
using VirtoCommerce.CustomerModule.Core.Services;
using VirtoCommerce.Platform.Core;
using VirtoCommerce.Platform.Core.Security;
using VirtoCommerce.XapiExample.ExperienceApi.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Authorization;

public class PendingOrderAuthorizationRequirement : IAuthorizationRequirement
{
}

public class PendingOrdersAuthorizationHandler : AuthorizationHandler<PendingOrderAuthorizationRequirement>
{
    private readonly IMemberResolver _memberResolver;

    public PendingOrdersAuthorizationHandler(IMemberResolver memberResolver)
    {
        _memberResolver = memberResolver;
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext context, PendingOrderAuthorizationRequirement requirement)
    {
        var result = context.User.IsInRole(PlatformConstants.Security.SystemRoles.Administrator);

        if (!result)
        {
            switch (context.Resource)
            {
                case PendingForApprovalsQuery query:
                    result = query.CustomerId == GetUserId(context);

                    if (!result)
                    {
                        var customer = await _memberResolver.ResolveMemberByIdAsync(query.CustomerId) as Contact;
                        if (customer != null)
                        {
                            result = customer.Organizations?.Contains(query.OrganizationId) ?? false;
                        }
                    }

                    break;
            }
        }

        if (result)
        {
            context.Succeed(requirement);
        }
        else
        {
            context.Fail();
        }
    }

    private static string GetUserId(AuthorizationHandlerContext context)
    {
        return context.User.GetUserId();
    }
}
