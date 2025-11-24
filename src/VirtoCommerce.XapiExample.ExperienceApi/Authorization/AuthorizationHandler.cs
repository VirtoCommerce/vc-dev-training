using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using VirtoCommerce.Platform.Core;
using VirtoCommerce.Platform.Core.Security;

namespace VirtoCommerce.XapiExample.ExperienceApi.Authorization;

public class AuthorizationRequirement : IAuthorizationRequirement
{
}

public class AuthorizationHandler : AuthorizationHandler<AuthorizationRequirement>
{
    private readonly Func<UserManager<ApplicationUser>> _userManagerFactory;

    public AuthorizationHandler(Func<UserManager<ApplicationUser>> userManagerFactory)
    {
        _userManagerFactory = userManagerFactory;
    }

    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, AuthorizationRequirement requirement)
    {
        var result = context.User.IsInRole(PlatformConstants.Security.SystemRoles.Administrator);

        if (!result)
        {
            var currentUserId = GetUserId(context);

            switch (context.Resource)
            {
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
