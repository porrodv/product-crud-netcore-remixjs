using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using System.Reflection.Metadata;
using product_crud.Server.Data.Entities;

namespace product_crud.Server.Data
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasIndex(c => c.Name).IsUnique();

            modelBuilder.Entity<Category>()
                .HasIndex(c => c.Name).IsUnique();

            modelBuilder.Entity<Category>()
                .HasMany(e => e.Products)
                .WithOne(e => e.Category)
                .HasForeignKey(e => e.CategoryId)
                .IsRequired();

            // Mocks

            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Alimentos y bebidas" },
                new Category { Id = 2, Name = "Ropa y accesorios" },
                new Category { Id = 3, Name = "Electrónica" }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
