using System.ComponentModel.DataAnnotations;

namespace product_crud.Server.Data.Entities
{
    public class Category
    {
        public int Id { get; set; }

        [Required]
        [StringLength(120)]
        public string Name { get; set; } = null!;

        public ICollection<Product> Products { get; } = new List<Product>();
    }
}
