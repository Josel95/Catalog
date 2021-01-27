using Catalog.Core.Entities;
using Microsoft.AspNetCore.JsonPatch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Catalog.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProduct(int id);
        Task<Product> CreateProduct(Product product);
        Task<Product> UpdateProduct(int id, JsonPatchDocument<Product> productJsonPatch);
        Task<Product> DeleteProduct(int id);
    }
}
