
using Alba;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using References.Api.External;
using References.Api.Links;

namespace References.Tests.Links;
public class AddingBlockedLink
{
    [Fact]
    public async Task AddingABlockedLinkGivesYouAFailure()
    {
        var linkToAdd = new LinkCreateRequest("https://wwww.geico.com", "Source Control Hub");
        var dummyLinkValidator = Substitute.For<IValidateLinksWithSecurity>();
       
        var host = await AlbaHost.For<Program>(config =>
        {
            
        });

        await host.Scenario(api =>
        {
            api.Post.Json(linkToAdd).ToUrl("/links");
            api.StatusCodeShouldBe(400);
        });
    }
}
