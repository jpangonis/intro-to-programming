

namespace Shared
{
    public record LinkValidationRequest(string Href);

    public enum LinkStatus { Good, Blocked, Pending };
    public record LinkValidationResponse(LinkStatus Status);

}
