using System;
using System.Collections.Generic;
using System.Text;

namespace Back.Application.DTOs.Product
{
    public class GetProductDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal price { get; set; }
        public string ImageBase64 { get; set; }
    }
}
