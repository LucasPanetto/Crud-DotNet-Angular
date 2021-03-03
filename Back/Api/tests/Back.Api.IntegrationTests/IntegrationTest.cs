using Back.Api.IntegrationTests.Helpers;
using Microsoft.AspNetCore.Mvc.Testing;
using System;
using Xunit;

namespace Back.Api.IntegrationTests
{
    public class IntegrationTest
    {
        protected readonly WebApplicationFactory<Startup> _factory;

        public IntegrationTest()
        {
            var appFactory = new WebApplicationFactory<Startup>().BuildApplicationFactory();
            _factory = appFactory;
        }
    }
}
