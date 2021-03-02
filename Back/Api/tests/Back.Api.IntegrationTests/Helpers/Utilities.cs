using Back.Domain.Entities;
using Back.Infrastructure.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace Back.Api.IntegrationTests.Helpers
{
    public static class Utilities
    {
        public static void InitializeDbForTests(ProductDbContext db)
        {
            db.Products.AddRange(GetSeedingHeroes());
            db.SaveChanges();
        }

        public static void ReinitializeDbForTests(ProductDbContext db)
        {
            db.Products.RemoveRange(db.Products);
            InitializeDbForTests(db);
        }

        public static List<Product> GetSeedingHeroes()
        {
            return new List<Product>()
            {
                new Product(){ Id = new Guid("824a7a65-b769-4b70-bccb-91f880b6ddf1"), Name = "Camisa", Price = 32 },
                new Product(){ Id = new Guid("b426070e-ccb3-42e6-8fb4-ef6aa5a62cc4"), Name = "Chave de Fenda", Price = 20 },
                new Product(){ Id = new Guid("634769f7-a7b8-4146-9cb2-ff2dd90e886b"), Name = "Carteira", Price = 50 }
            };
        }

        public static WebApplicationFactory<Startup> BuildApplicationFactory(this WebApplicationFactory<Startup> factory)
        {
            return factory.WithWebHostBuilder(builder =>
            {
                builder.UseEnvironment("Testing");
                builder.ConfigureServices(services =>
                {
                    var sp = services.BuildServiceProvider();

                    using (var scope = sp.CreateScope())
                    {
                        var scopedServices = scope.ServiceProvider;
                        var db = scopedServices.GetRequiredService<ProductDbContext>();
                        var logger = scopedServices
                            .GetRequiredService<ILogger<WebApplicationFactory<Startup>>>();

                        db.Database.EnsureCreated();

                        try
                        {
                            InitializeDbForTests(db);
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(ex, "An error occurred seeding the " +
                                                "database with test messages. Error: {Message}", ex.Message);
                        }
                    }
                });
            });
        }


        public static WebApplicationFactory<Startup> RebuildDb(this WebApplicationFactory<Startup> factory)
        {
            return factory.WithWebHostBuilder(builder =>
            {
                builder.ConfigureServices(services =>
                {
                    var serviceProvider = services.BuildServiceProvider();

                    using (var scope = serviceProvider.CreateScope())
                    {
                        var scopedServices = scope.ServiceProvider;
                        var db = scopedServices
                            .GetRequiredService<ProductDbContext>();
                        var logger = scopedServices
                            .GetRequiredService<ILogger<IntegrationTest>>();
                        try
                        {
                            ReinitializeDbForTests(db);
                        }
                        catch (Exception ex)
                        {
                            logger.LogError(ex, "An error occurred seeding " +
                                                "the database with test messages. Error: {Message}",
                                ex.Message);
                        }
                    }
                });
            });
        }


    }
}
