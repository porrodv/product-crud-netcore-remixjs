using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace product_crud.Server.Data.Dtos.Product
{
    public class CreateProductDTO
    {
        [Required(ErrorMessage = "El nombre es requerido")]
        [StringLength(120)]
        public string Name { get; set; }

        [Required(ErrorMessage = "El precio es requerido y debe ser un número válido")]
        public decimal? Price { get; set; }

        [Required(ErrorMessage = "El ID de categoría es requerido")]
        public int? CategoryId { get; set; }
    }
}
