using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Permissions = VirtoCommerce.XapiExample.Core.ModuleConstants.Security.Permissions;

namespace VirtoCommerce.XapiExample.Web.Controllers.Api;

[Authorize]
[Route("api/xapi-example")]
public class XapiExampleController : Controller
{
    // GET: api/xapi-example
    /// <summary>
    /// Get message
    /// </summary>
    /// <remarks>Return "Hello world!" message</remarks>
    [HttpGet]
    [Route("")]
    [Authorize(Permissions.Read)]
    public ActionResult<string> Get()
    {
        return Ok(new { result = "Hello world!" });
    }
}
