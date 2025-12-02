using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using VirtoCommerce.Platform.Core;
using VirtoCommerce.Platform.Core.Security;
using VirtoCommerce.XapiExample.ExperienceApi.Queries;

namespace VirtoCommerce.XapiExample.ExperienceApi.Authorization;

public class PendingOrderAuthorizationRequirement : IAuthorizationRequirement
{
}

public class PendingOrdersAuthorizationHandler : AuthorizationHandler<PendingOrderAuthorizationRequirement>
{
    private readonly Func<UserManager<ApplicationUser>> _userManagerFactory;

    public PendingOrdersAuthorizationHandler(Func<UserManager<ApplicationUser>> userManagerFactory)
    {
        _userManagerFactory = userManagerFactory;
    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, PendingOrderAuthorizationRequirement requirement)
    {
        var result = context.User.IsInRole(PlatformConstants.Security.SystemRoles.Administrator);

        if (!result)
        {
            var currentUserId = GetUserId(context);

            switch (context.Resource)
            {
                case PendingForApprovalsQuery query:
                    result = query.ApproverId == currentUserId;
                    break;
                case string userId:
                    result = userId == currentUserId;
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

        return Task.CompletedTask;
    }

    private static string GetUserId(AuthorizationHandlerContext context)
    {
        return context.User.GetUserId();
    }
}
