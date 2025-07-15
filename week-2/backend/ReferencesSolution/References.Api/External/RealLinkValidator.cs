using Shared;

namespace References.Api.External;

public class RealLinkValidator(HttpClient client) : IValidateLinksWithSecurity
{
    public async Task<LinkValidationResponse> ValidateLinkAsync(LinkValidationRequest request)
    {
        var response = await client.PostAsJsonAsync("/check-link", request);

        response.EnsureSuccessStatusCode(); // blow up here, throw an exception if the response isn't 200-299

        var responseBody = await response.Content.ReadFromJsonAsync<LinkValidationResponse>();


        if (responseBody is null)
        {
            throw new Exception("No response!");
        }

        return responseBody;
    }
}
