using Shared;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapPost("/check-link", (LinkValidationRequest request) =>
{
    if(request.Href.ToLower().Contains("geico"))
    {
        return Results.Ok(new LinkValidationResponse(LinkStatus.Blocked));
    } else
    {
        return Results.Ok(new LinkValidationResponse(LinkStatus.Good));
    }
});

app.Run();

