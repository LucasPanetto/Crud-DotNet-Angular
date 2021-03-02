using Back.Application.DTOs.Product;
using Back.Application.Filters;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Back.Application.Interfaces
{
    public interface IProductAppService: IDisposable
    {
        public Task<List<GetProductDTO>> GetAllProducts(GetProductsFilter filter);

        public Task<GetProductDTO> GetProductById(Guid id);

        public Task<GetProductDTO> CreateProduct(InsertProductDTO hero);

        public Task<GetProductDTO> UpdateProduct(Guid id, UpdateProductDTO updatedHero);

        public Task<bool> DeleteProduct(Guid id);
    }
}
