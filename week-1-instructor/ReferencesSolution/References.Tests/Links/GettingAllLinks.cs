
using Alba;

namespace References.Tests.Links;

public class GettingAllLinks
{

    [Fact]
    public async Task GettingLinksReturnsA200Ok()
    {

        // GET /links

        var host = await AlbaHost.For<Program>();

        await host.Scenario(api =>
        {
            api.Get.Url("/links");
            api.StatusCodeShouldBeOk();
        });
    }
}
