using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using System.Runtime.Serialization;

namespace product_crud.Server.Data.Dtos.Product
{
    public class UpdateProductDTO : CreateProductDTO
    {
        [StringLength(120)]
        public new string? Name { get; set; }

        public new decimal? Price { get; set; }

        public new int? CategoryId { get; set; }
    }
}
