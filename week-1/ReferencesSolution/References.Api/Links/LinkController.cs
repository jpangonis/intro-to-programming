using Microsoft.AspNetCore.Mvc;

namespace References.Api.Links;

public class LinkController : ControllerBase
{
    //some code here that will get called when a GEt to links is sent to the server

    // just return 200, no other processing
    [HttpGet("/links")]
    public async Task<ActionResult> GetAllLinksAsync(CancellationToken token)
    {
        return Ok();
    }
}
