using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // This BaseApiController is the base controller for all of our API controllers
    // Route is api/[controller] eg: api/users
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
    }
}
