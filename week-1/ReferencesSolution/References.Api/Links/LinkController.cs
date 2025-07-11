
using Marten;
using Microsoft.AspNetCore.Mvc;

namespace References.Api.Links;

public class LinkController(IDocumentSession session) : ControllerBase
{

    // some code here that will get called when a GET /links is sent to this server.

    [HttpGet("/links")]
    public async Task<ActionResult> GetAllLinksAsync(CancellationToken token)
    {


        var response = await session.Query<LinkEntity>().ToListAsync();
        return Ok(response);
    }

    [HttpPost("/links")]
    public async Task<ActionResult> AddALinkAsync([FromBody] LinkCreateRequest request, CancellationToken token)
    {

        // do your validation, did they send the right thing.
        // create an entity and save that to the database
        var entityToSave = new LinkEntity()
        {
            Id = Guid.NewGuid(),
            Href = request.Href,
            Description = request.Description,
        };
        session.Store(entityToSave);
        await session.SaveChangesAsync();
        // return them a "copy" of what they saved to the database.
        return Ok(entityToSave);
    }



}

/*{
    "href": "https://microsoft.com",
    "description": "Microsoft's Main Site"
}*/

public record LinkCreateRequest(string Href, string Description);

public class LinkEntity
{
    public Guid Id { get; set; }
    public string Href { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}