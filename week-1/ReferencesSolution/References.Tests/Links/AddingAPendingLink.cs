using Alba;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using References.Api.External;
using References.Api.Links;

namespace References.Tests.Links;
public class AddingAPendingLink
{
    [Fact]
    public async Task AddingAPendingLinkReturnsProper()
    {
        var linkToAdd = new LinkCreateRequest("https://wwww.somesite.com", "Source Control Hub");
        var dummyLinkValidator = Substitute.For<IValidateLinksWithSecurity>();
        dummyLinkValidator
            .ValidateLinkAsync(Arg.Any<LinkValidationRequest>())
            .Returns(Task.FromResult(new LinkValidationResponse(LinkStatus.Pending)));
        var host = await AlbaHost.For<Program>(config =>
        {
            config.ConfigureTestServices(services =>
            {
                services.AddScoped(_ => dummyLinkValidator);
            });
        });

        var response = await host.Scenario(api =>
        {
            api.Post.Json(linkToAdd).ToUrl("/links");
            api.StatusCodeShouldBe(400);
        });

        Assert.NotNull(response);

        var location = response.Context.Response.Headers.Location.Single();
        Assert.NotNull(location);

        var GetResponse = await host.Scenario(api =>
        {
            api.Get.Url(location);
            api.StatusCodeShouldBeOk();
        });

        Assert.NotNull(GetResponse);

        var GetResponseBody = GetResponse.ReadAsJson<PendingLinkEntity>();
        Assert.NotNull(GetResponseBody);

        Assert.Equal(GetResponseBody.Status, LinkStatus.Pending);
    }
}