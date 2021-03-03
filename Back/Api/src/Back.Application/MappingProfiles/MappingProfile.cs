using AutoMapper;
using Back.Application.DTOs.Product;
using Back.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Back.Application.MappingProfiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            /// Product Map
            CreateMap<Product, GetProductDTO>().ReverseMap();
            CreateMap<InsertProductDTO, Product>();
            CreateMap<UpdateProductDTO, Product>();
            ///
        }
    }
}
