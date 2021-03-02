using Back.Domain.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Back.Domain.Entities
{
    public class Product : Entity
    {
        [Required]
        public string Name { get; set; }
        public double Price { get; set; }
        public string ImageBase64 { get; set; }
    }
}
