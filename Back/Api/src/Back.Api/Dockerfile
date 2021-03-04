
##See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.
#
FROM mcr.microsoft.com/dotnet/aspnet:5.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0-buster-slim AS build
WORKDIR /src
COPY ["src/Back.Api/Back.Api.csproj", "src/Back.Api/"]
COPY ["src/Back.Application/Back.Application.csproj", "src/Back.Application/"]
COPY ["src/Back.Domain/Back.Domain.csproj", "src/Back.Domain/"]
COPY ["src/Back.Domain.Core/Back.Domain.Core.csproj", "src/Back.Domain.Core/"]
COPY ["src/Back.Infrastructure/Back.Infrastructure.csproj", "src/Back.Infrastructure/"]
COPY . .
WORKDIR "/src/src/Back.Api"

FROM build AS publish
RUN dotnet publish "Back.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Back.Api.dll"]