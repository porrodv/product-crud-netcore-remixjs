using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using product_crud.Server.Data;
using product_crud.Server.Data.Dtos.Category;
using product_crud.Server.Models;

namespace product_crud.Server.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CategoryController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("all")]
        public async Task<ActionResult<List<CategoryDTO>>> GetCategories()
        {
            var actor = await _context.Categories.ToListAsync();
            var categories = _mapper.Map<List<CategoryDTO>>(actor);

            return Ok(categories);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<CategoryDTO>> GetCategoryById(int id)
        {
            var actor = await _context.Categories.FindAsync(id);

            if (actor == null)
            {
                ErrorResponse errorResponse = new ErrorResponse("Not found", 404, "Categoría no registrada");
                return NotFound(errorResponse);
            }

            var category = _mapper.Map<CategoryDTO>(actor);

            return category;
        }
    }
}
