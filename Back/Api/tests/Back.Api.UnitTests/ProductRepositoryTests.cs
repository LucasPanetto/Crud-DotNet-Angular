using Back.Domain.Entities;
using Back.Infrastructure.Context;
using Back.Infrastructure.Repositories;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Back.Api.UnitTests
{
    public class ProductRepositoryTests
    {
        private ProductDbContext CreateDbContext(string name)
        {
            var options = new DbContextOptionsBuilder<ProductDbContext>()
            .UseInMemoryDatabase(name)
            .Options;
            return new ProductDbContext(options);
        }

        [Theory]
        [InlineData("4e1a20db-0533-4838-bd97-87d2afc89832")]
        [InlineData("ff57101b-d9c6-4b8a-959e-2d64c7ae8967")]
        [InlineData("2c0176d6-47d6-4ce1-b5e8-bed9a52b9e64")]
        [InlineData("bf15a502-37db-4d4c-ba4c-e231fb5487e6")]
        [InlineData("e141a755-98d4-44d3-a84f-528e6e75f543")]
        public async Task GetById_existing_products(Guid id)
        {
            // Arrange
            using (var context = CreateDbContext("GetById_existing_products"))
            {
                context.Set<Product>().Add(new Product { Id = id });
                await context.SaveChangesAsync();
            }

            Product product = null;

            // Act
            using (var context = CreateDbContext("GetById_existing_products"))
            {
                var repository = new ProductRepository(context);
                product = await repository.GetById(id);
            }

            // Assert
            product.Should().NotBeNull();
            product.Id.Should().Be(id);
        }

        [Theory]
        [InlineData("4e1a20db-0533-4838-bd97-87d2afc89832")]
        [InlineData("ff57101b-d9c6-4b8a-959e-2d64c7ae8967")]
        [InlineData("2c0176d6-47d6-4ce1-b5e8-bed9a52b9e64")]
        [InlineData("bf15a502-37db-4d4c-ba4c-e231fb5487e6")]
        [InlineData("e141a755-98d4-44d3-a84f-528e6e75f543")]
        public async Task GetById_inexistent_products(Guid id)
        {
            // Arrange
            using (var context = CreateDbContext("GetById_inexisting_products"))
            {
                context.Set<Product>().Add(new Product { Id = id });
                await context.SaveChangesAsync();
            }
            Product product = null;

            // Act
            using (var context = CreateDbContext("GetById_inexisting_products"))
            {
                var repository = new ProductRepository(context);
                product = await repository.GetById(new Guid());
            }

            // Assert
            product.Should().BeNull();
        }

        [Theory]
        [InlineData(0)]
        [InlineData(1)]
        [InlineData(5)]
        public async Task GetAll_products(int count)
        {
            // Arrange
            using (var context = CreateDbContext($"GetAll_with_products_{count}"))
            {
                for (var i = 0; i < count; i++)
                {
                    context.Set<Product>().Add(new Product());
                }
                await context.SaveChangesAsync();
            }

            List<Product> products = null;

            // Act
            using (var context = CreateDbContext($"GetAll_with_products_{count}"))
            {
                var repository = new ProductRepository(context);
                products = await repository.GetAll().ToListAsync();
            }

            // Assert
            products.Should().NotBeNull();
            products.Count().Should().Be(count);
        }

        [Fact]
        public async Task Create_Product()
        {
            // Arrange
            int result;

            // Act
            var product = new Product()
            {
                Name = "Skate",
                Price = 15.98,
                ImageBase64 = "codeImage"
            };

            using (var context = CreateDbContext("Create_Product"))
            {
                var repository = new ProductRepository(context);
                repository.Create(product);
                result = await repository.SaveChangesAsync();
            }

            // Assert
            result.Should().BeGreaterThan(0);

            result.Should().Be(1);

            // Simulate access from another context to verifiy that correct data was saved to database
            using (var context = CreateDbContext("Create_Product"))
            {
                (await context.Products.CountAsync()).Should().Be(1);
                (await context.Products.FirstAsync()).Should().Be(product);
            }
        }

        [Fact]
        public async Task Update_Product()
        {
            // Arrange
            int result;

            Guid? id;

            using (var context = CreateDbContext("Update_Product"))
            {
                var createdProduct = new Product()
                {
                    Name = "Skate",
                    Price = 15.98,
                    ImageBase64 = "codeImage",
                };
                context.Set<Product>().Add(createdProduct);
                context.Set<Product>().Add(new Product() { Name = "Another Product", Price = 35, ImageBase64 = "newCodeImage"});
                await context.SaveChangesAsync();
                id = createdProduct.Id; //receive autogenerated guid to get the entity later
            }

            // Act
            Product updateProduct;
            using (var context = CreateDbContext("Update_Product"))
            {
                updateProduct = await context.Set<Product>().FirstOrDefaultAsync(x => x.Id == id);
                updateProduct.Price = 10.50;
                updateProduct.ImageBase64 = "bestCodeImage";
                var repository = new ProductRepository(context);
                repository.Update(updateProduct);
                result = await repository.SaveChangesAsync();
            }


            // Assert
            result.Should().BeGreaterThan(0);
            result.Should().Be(1);
            // Simulate access from another context to verifiy that correct data was saved to database
            using (var context = CreateDbContext("Update_Product"))
            {
                (await context.Products.FirstAsync(x => x.Id == updateProduct.Id)).Should().Be(updateProduct);
            }
        }

        [Fact]
        public async Task Delete_Product()
        {
            // Arrange
            int result;
            Guid? id;
            using (var context = CreateDbContext("Delete_Product"))
            {
                var createdProduct = new Product()
                {
                    Name = "Skate",
                    Price = 15.98,
                    ImageBase64 = "codeImage"
                };
                context.Set<Product>().Add(createdProduct);
                context.Set<Product>().Add(new Product() { Name = "Another Product", ImageBase64 = "newCodeImage", Price = 17 });
                await context.SaveChangesAsync();
                id = createdProduct.Id; //receive autogenerated guid to get the entity later
            }

            // Act
            using (var context = CreateDbContext("Delete_Product"))
            {
                var repository = new ProductRepository(context);
                await repository.Delete(id.Value);
                result = await repository.SaveChangesAsync();
            }


            // Assert
            result.Should().BeGreaterThan(0);
            result.Should().Be(1);
            // Simulate access from another context to verifiy that correct data was saved to database
            using (var context = CreateDbContext("Delete_Product"))
            {
                (await context.Set<Product>().FirstOrDefaultAsync(x => x.Id == id)).Should().BeNull();
                (await context.Set<Product>().ToListAsync()).Should().NotBeEmpty();
            }
        }
    }
}
