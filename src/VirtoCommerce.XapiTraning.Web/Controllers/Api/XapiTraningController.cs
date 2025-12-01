using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Permissions = VirtoCommerce.XapiTraning.Core.ModuleConstants.Security.Permissions;

namespace VirtoCommerce.XapiTraning.Web.Controllers.Api;

[Authorize]
[Route("api/xapi-traning")]
public class XapiTraningController : Controller
{
    // GET: api/xapi-traning
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
