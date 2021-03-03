using Back.Domain.Entities;
using Back.Domain.Repositories;
using Back.Infrastructure.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Back.Infrastructure.Repositories
{
    public class ProductRepository : Repository<Product>, IProductRepository
    {
        public ProductRepository(ProductDbContext dbContext) : base(dbContext) { }
    }
}
