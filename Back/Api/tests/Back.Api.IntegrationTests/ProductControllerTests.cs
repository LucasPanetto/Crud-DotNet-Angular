﻿using Back.Api.IntegrationTests.Helpers;
using FluentAssertions;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Back.Api.IntegrationTests
{
    public class ProductControllerTests : IntegrationTest
    {
        #region GET

        [Fact]
        public async Task Get_AllProducts_ReturnsOk()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var response = await client.GetAsync("/api/Product");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            string json = await response.Content.ReadAsStringAsync();
            var array = JArray.Parse(json);
            array.HasValues.Should().BeTrue();
            array.Should().OnlyHaveUniqueItems();
        }

        [Fact]
        public async Task Get_ExistingProductsWithFilter_ReturnsOk()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var response = await client.GetAsync("/api/Product?Name=Corban");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            string json = await response.Content.ReadAsStringAsync();
            var array = JArray.Parse(json);
            array.HasValues.Should().BeTrue();
            array.Should().OnlyHaveUniqueItems();
            array.Should().ContainSingle();
        }


        [Fact]
        public async Task Get_NonExistingProductsWithFilter_ReturnsOk()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var response = await client.GetAsync("/api/Product?Name=asdfsdlkafhsduifhasduifhsdui");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            string json = await response.Content.ReadAsStringAsync();
            var array = JArray.Parse(json);
            array.Should().BeEmpty();
        }

        #endregion

        #region POST

        [Fact]
        public async Task Post_ValidProduct_ReturnsCreated()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Name = "Name Product success",
                ProductType = 1
            });
            var response = await client.PostAsync("/api/Product", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);
            var json = JObject.Parse(await response.Content.ReadAsStringAsync());
            json["id"].Should().NotBeNull();
            json["name"].Should().NotBeNull();
            json["heroType"].Should().NotBeNull();
        }

        [Fact]
        public async Task Post_NamelessProduct_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Individuality = "Individuality hero badrequest"
            });
            var response = await client.PostAsync("/api/Product", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Post_IndividualitylessProduct_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Name = "Name hero badrequest"
            });
            var response = await client.PostAsync("/api/Product", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Post_EmptyProduct_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
            });
            var response = await client.PostAsync("/api/Product", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        #endregion


        #region PUT

        [Fact]
        public async Task Put_ValidProduct_ReturnsNoContent()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Name = "Name hero success",
                ProductType = 1
            });
            var response = await client.PutAsync("/api/Product/824a7a65-b769-4b70-bccb-91f880b6ddf1", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.NoContent);
        }


        [Fact]
        public async Task Put_NamelessProduct_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                ProductType = 1
            });
            var response = await client.PutAsync("/api/Product/824a7a65-b769-4b70-bccb-91f880b6ddf1", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Put_Individualityless_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Name = "Name hero badrequest"
            });
            var response = await client.PutAsync("/api/Product/824a7a65-b769-4b70-bccb-91f880b6ddf1", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Put_EmptyProduct_ReturnsBadRequest()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
            });
            var response = await client.PutAsync("/api/Product/824a7a65-b769-4b70-bccb-91f880b6ddf1", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        }

        [Fact]
        public async Task Put_InvalidProductId_ReturnsNotFound()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            // Act
            var newProduct = JsonConvert.SerializeObject(new
            {
                Name = "Name hero not found",
                ProductType = 1
            });
            var response = await client.PutAsync("/api/Product/1d2c03e0-cc51-4f22-b1be-cdee04b1f896", new StringContent(newProduct, Encoding.UTF8, "application/json"));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        #endregion

        #region DELETE

        [Fact]
        public async Task Delete_ValidProduct_ReturnsNoContent()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            var response = await client.DeleteAsync("/api/Product/824a7a65-b769-4b70-bccb-91f880b6ddf1");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.NoContent);
        }

        [Fact]
        public async Task Delete_InvalidProduct_ReturnsNotFound()
        {
            // Arrange
            var client = _factory.RebuildDb().CreateClient();

            var response = await client.DeleteAsync("/api/Product/88d59ace-2c1a-49b0-8190-49b8304f8120");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        #endregion
    }
}
