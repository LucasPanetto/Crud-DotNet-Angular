using Back.Application.DTOs.Product;
using Back.Application.Filters;
using Back.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Back.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductAppService _productAppService;

        public ProductController(IProductAppService productAppService)
        {
            _productAppService = productAppService;
        }


        /// <summary>
        /// Returns all products in the database
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<GetProductDTO>>> Getproducts([FromQuery] GetProductsFilter filter)
        {
            return Ok(await _productAppService.GetAllProducts(filter));
        }



        /// <summary>
        /// Get one product by id from the database
        /// </summary>
        /// <param name="id">The product's ID</param>
        /// <returns></returns>
        [HttpGet]
        [Route("{id}")]
        [ProducesResponseType(404)]
        [ProducesResponseType(typeof(GetProductDTO), 200)]
        public async Task<ActionResult<GetProductDTO>> GetProductById(Guid id)
        {
            var product = await _productAppService.GetProductById(id);
            if (product == null) return NotFound();
            else return Ok(product);
        }

        /// <summary>
        /// Insert one product in the database
        /// </summary>
        /// <param name="dto">The product information</param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<GetProductDTO>> Create([FromBody] InsertProductDTO dto)
        {
            var newProduct = await _productAppService.CreateProduct(dto);
            return CreatedAtAction("GetProductById", new { id = newProduct.Id }, newProduct);

        }

        /// <summary>
        /// Update a product from the database
        /// </summary>
        /// <param name="id">The product's ID</param>
        /// <param name="dto">The update object</param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<ActionResult<GetProductDTO>> Update(Guid id, [FromBody] UpdateProductDTO dto)
        {

            var updatedProduct = await _productAppService.UpdateProduct(id, dto);

            if (updatedProduct == null)
            {
                return NotFound();
            }

            return NoContent();
        }


        /// <summary>
        /// Delete a product from the database
        /// </summary>
        /// <param name="id">The product's ID</param>
        /// <returns></returns>
        [HttpDelete]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [Route("{id}")]
        public async Task<ActionResult> Delete(Guid id)
        {

            var deleted = await _productAppService.DeleteProduct(id);
            if (deleted) return NoContent();
            else return NotFound();

        }
    }
}
