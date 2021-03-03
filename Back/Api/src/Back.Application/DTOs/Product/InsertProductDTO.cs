using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Back.Application.DTOs.Product
{
    public class InsertProductDTO
    {
        [Required(ErrorMessage = "É necessário informar o nome do produto")]
        public string Name { get; set; }
        [Required(ErrorMessage = "É necessário informar o valor do produto")]
        public double Price { get; set; }
        [Required(ErrorMessage = "É necessário selecionar uma imagem")]
        public string ImageBase64 { get; set; }
    }
}
