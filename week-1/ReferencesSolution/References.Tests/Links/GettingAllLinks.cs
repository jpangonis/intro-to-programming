
using Alba;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.AspNetCore.TestHost;
using References.Api.External;

namespace References.Tests.Links;

public class GettingAllLinks
{

    [Fact]
    public async Task GettingLinksReturnsA200Ok()
    {

        // GET /links
        var dummyLinkValidator = Substitute.For<IValidateLinksWithSecurity>();
        dummyLinkValidator
            .ValidateLinkAsync(Arg.Any<LinkValidationRequest>())
            .Returns(Task.FromResult(new LinkValidationResponse(LinkStatus.Good)));
        var host = await AlbaHost.For<Program>(config =>
        {
            config.ConfigureTestServices(services{
                ServicesModelBinder.AddScoped<IValidateLinksWithSecurity>(_ => dummyLinkValidator);
            });
        });

        await host.Scenario(api =>
        {
            api.Get.Url("/links");
            api.StatusCodeShouldBeOk();
        });
    }
}
