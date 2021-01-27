using Catalog.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Catalog.Infrastructure.Data
{
    public class CatalogContext : DbContext
    {

        public CatalogContext() : base()
        {

        }

        public CatalogContext(DbContextOptions<CatalogContext> options) : base(options)
        {

        }

        public virtual DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(product => {
                product.HasKey(p => p.Id);

                product.Property(p => p.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                product.Property(p => p.Price)
                    .IsRequired();

                product.Property(p => p.Description)
                    .IsRequired()
                    .HasMaxLength(240);

                product.Property(p => p.Image)
                    .IsRequired();

                product.Property(p => p.ReleaseDate)
                    .IsRequired();

                product.Property(p => p.IsActive)
                    .IsRequired();
            });
        }
    }
}
