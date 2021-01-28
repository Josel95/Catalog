using Catalog.Core.Entities;
using Catalog.Core.Exceptions;
using Catalog.Core.Interfaces;
using Catalog.Infrastructure.Data;
using Microsoft.AspNetCore.JsonPatch;
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

            if (product == null)
            {
                throw new NotFoundException("The product was not found");
            }

            return product;
        }

        public async Task<Product> CreateProduct(Product product)
        {
            var createdProduct = await context.Products.AddAsync(product);

            await context.SaveChangesAsync();

            return createdProduct.Entity;
        }

        public async Task<Product> UpdateProduct(int id, JsonPatchDocument<Product> productJsonPatch)
        {
            var updatedProduct = await GetProduct(id);

            productJsonPatch.ApplyTo(updatedProduct);

            await context.SaveChangesAsync();

            return updatedProduct;
        }

        public async Task<Product> DeleteProduct(int id)
        {
            var deletedProduct = await GetProduct(id);

            context.Products.Remove(deletedProduct);

            await context.SaveChangesAsync();

            return deletedProduct;
        }
    }
}
