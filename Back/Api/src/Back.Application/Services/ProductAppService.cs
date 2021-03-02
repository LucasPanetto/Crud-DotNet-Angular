using AutoMapper;
using Back.Application.DTOs.Product;
using Back.Application.Extensions;
using Back.Application.Filters;
using Back.Application.Interfaces;
using Back.Domain.Entities;
using Back.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Back.Application.Services
{
    public class ProductAppService : IProductAppService
    {

        private readonly IMapper _mapper;
        private readonly IProductRepository _productRepository;

        public ProductAppService(IMapper mapper, IProductRepository productRepository)
        {
            _mapper = mapper;
            _productRepository = productRepository;
        }

        public async Task<List<GetProductDTO>> GetAllProducts(GetProductsFilter filter)
        {

            var products = _productRepository
                .GetAll()
                .WhereIf(!string.IsNullOrEmpty(filter?.Name), x => EF.Functions.Like(x.Name, $"%{filter.Name}%"))
                .WhereIf(filter?.Price != null, x => x.Price == filter.Price);
            return await _mapper.ProjectTo<GetProductDTO>(products)
                .ToListAsync();
        }

        public async Task<GetProductDTO> GetProductById(Guid id)
        {
            return _mapper.Map<GetProductDTO>(await _productRepository.GetById(id));
        }

        public async Task<GetProductDTO> CreateProduct(InsertProductDTO product)
        {
            var created = _productRepository.Create(_mapper.Map<Product>(product));
            await _productRepository.SaveChangesAsync();
            return _mapper.Map<GetProductDTO>(created);
        }

        public async Task<GetProductDTO> UpdateProduct(Guid id, UpdateProductDTO updatedProduct)
        {
            var originalProduct = await _productRepository.GetById(id);
            if (originalProduct == null) return null;

            originalProduct.Name = updatedProduct?.Name;
            originalProduct.Price = (decimal)updatedProduct?.Price;
            originalProduct.ImageBase64 = updatedProduct?.ImageBase64;
            _productRepository.Update(originalProduct);
            await _productRepository.SaveChangesAsync();
            return _mapper.Map<GetProductDTO>(originalProduct);
        }

        public async Task<bool> DeleteProduct(Guid id)
        {
            await _productRepository.Delete(id);
            return await _productRepository.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                _productRepository.Dispose();
            }
        }

    }
}
