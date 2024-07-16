using AutoMapper;
using product_crud.Server.Data.Entities;
using product_crud.Server.Data.Dtos.Category;
using product_crud.Server.Data.Dtos.Product;

namespace product_crud.Server.Helpers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CreateProductDTO, Product>();
            CreateMap<Product, ProductDTO>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<Category, CategoryDTO>();
        }
    }
}
