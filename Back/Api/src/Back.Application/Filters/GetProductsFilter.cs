using System;
using System.Collections.Generic;
using System.Text;

namespace Back.Application.Filters
{
    public class GetProductsFilter
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string ImageBase64{ get; set; }

    }
}
