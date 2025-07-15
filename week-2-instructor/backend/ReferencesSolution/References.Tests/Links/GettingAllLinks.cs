
using Alba;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using NSubstitute;
using References.Api.External;

namespace References.Tests.Links;

public class GettingAllLinks
{

    [Fact]
    public async Task GettingLinksReturnsA200Ok()
    {

        // GET /links
       
     
       
        var host = await AlbaHost.For<Program>(config =>
        {
           
        });

        await host.Scenario(api =>
        {
            api.Get.Url("/links");
            api.StatusCodeShouldBeOk();
        });
    }
}
