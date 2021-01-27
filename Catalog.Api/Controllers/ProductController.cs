using Catalog.Core.Entities;
using Catalog.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalog.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository productRepository;

        public ProductController(IProductRepository productRepository)
        {
            this.productRepository = productRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var products = await this.productRepository.GetProducts();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var product = await this.productRepository.GetProduct(id);

            return Ok(product);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {
            var createdProduct = await this.productRepository.CreateProduct(product);

            return Ok(createdProduct);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, Product product)
        {
            var updatedProduct = await this.productRepository.UpdateProduct(id, product);

            return Ok(updatedProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deletedProduct = await this.productRepository.DeleteProduct(id);

            return Ok(deletedProduct);
        }
    }
}
