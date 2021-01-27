using Catalog.Core.Entities;
using Catalog.Core.Interfaces;
using Catalog.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly CatalogContext context;

        public ProductRepository(CatalogContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await context.Products.ToListAsync();

            return products;
        }

        public async Task<Product> GetProduct(int id)
        {
            var product = await context.Products.FindAsync(id);

            return product;
        }

        public async Task<Product> CreateProduct(Product product)
        {
            var createdProduct = await context.Products.AddAsync(product);

            await context.SaveChangesAsync();

            return createdProduct.Entity;
        }

        public async Task<Product> UpdateProduct(int id, Product product)
        {
            var updatedProduct = await context.Products.FindAsync(id);

            updatedProduct.Description = product.Description;
            updatedProduct.Image = product.Image;
            updatedProduct.IsActive = product.IsActive;
            updatedProduct.Name = product.Name;
            updatedProduct.Price = product.Price;
            updatedProduct.ReleaseDate = product.ReleaseDate;

            await context.SaveChangesAsync();

            return updatedProduct;
        }

        public async Task<Product> DeleteProduct(int id)
        {
            var deletedProduct = await context.Products.FindAsync(id);

            context.Products.Remove(deletedProduct);

            await context.SaveChangesAsync();

            return deletedProduct;
        }
    }
}
