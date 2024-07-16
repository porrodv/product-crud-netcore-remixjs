using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using product_crud.Server.Data;
using Microsoft.EntityFrameworkCore;
using product_crud.Server.Data.Dtos.Product;
using product_crud.Server.Data.Entities;
using product_crud.Server.Models;

namespace product_crud.Server.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ProductController(AppDbContext context, IMapper mapper) { 
            _context = context;
            _mapper = mapper;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<ProductDTO>>> GetProducts()
        {
            var actor = await _context.Products
                .Include(p => p.Category)
                .ToListAsync();
            var products = _mapper.Map<List<ProductDTO>>(actor);

            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ProductDTO>> GetProductById(int id)
        {
            var actor = await _context.Products
                .Include(p => p.Category)
                .FirstAsync(p => p.Id == id);

            if (actor == null)
            {
                ErrorResponse errorResponse = new ErrorResponse("Not found", 404, "Producto no registrado");
                return NotFound(errorResponse);
            }

            var product = _mapper.Map<ProductDTO>(actor);

            return product;
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductDTO newProduct)
        {
            var existingProduct = await _context.Products
                .FirstOrDefaultAsync(p => p.Name == newProduct.Name);

            if (existingProduct != null)
            {
                ErrorResponse errorResponse = new ErrorResponse("Bad Request", 400, "Producto ya existente");
                return BadRequest(errorResponse);
            }

            var actor = _mapper.Map<Product>(newProduct);

            _context.Add(actor);
            await _context.SaveChangesAsync();

            var categoryName = await _context.Categories
                .Where(c => c.Id == newProduct.CategoryId)
                .Select(c => c.Name)
                .FirstOrDefaultAsync();

            var product = _mapper.Map<ProductDTO>(actor);
            product.CategoryName = categoryName;

            return CreatedAtAction(nameof(CreateProduct), product);
        }

        [HttpPut("update/{id:int}")]
        public async Task<ActionResult> UpdateProduct(int id, [FromBody] UpdateProductDTO newProduct)
        {
            var actor = await _context.Products.FindAsync(id);

            if (actor == null)
            {
                ErrorResponse errorResponse = new ErrorResponse("Not found", 404, "Producto no registrado");
                return NotFound(errorResponse);
            }

            if (!string.IsNullOrEmpty(newProduct.Name)) 
                actor.Name = newProduct.Name;

            if (newProduct.Price.HasValue)
                actor.Price = newProduct.Price.Value;

            if (newProduct.CategoryId.HasValue)
            {
                var categoryExists = await _context.Categories.FindAsync(newProduct.CategoryId);

                if (categoryExists == null)
                {
                    ErrorResponse errorResponse = new ErrorResponse("Bad Request", 400, "El ID de categoría no existe");
                    return BadRequest(errorResponse);
                }

                actor.CategoryId = newProduct.CategoryId.Value;
            }

            await _context.SaveChangesAsync();

            var updatedProduct = _mapper.Map<ProductDTO>(actor);

            var categoryName = await _context.Categories
                .Where(c => c.Id == actor.CategoryId)
                .Select(c => c.Name)
                .FirstOrDefaultAsync();

            updatedProduct.CategoryName = categoryName;

            return Ok(updatedProduct);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<ActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
            {
                ErrorResponse errorResponse = new ErrorResponse("Not found", 404, "Producto no registrado");
                return NotFound(errorResponse);
            }

            _context.Remove(product);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
