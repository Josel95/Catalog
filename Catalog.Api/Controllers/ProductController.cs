using Catalog.Core.Entities;
using Catalog.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.JsonPatch;
using Catalog.Api.Responses;
using Catalog.Core.Exceptions;

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

            return new ApiResult(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (id <= 0)
            {
                throw new BadRequestException("The id parameter has to be greater than 0.");
            }

            var product = await this.productRepository.GetProduct(id);

            if(product == null)
            {
                throw new NotFoundException("The product was not found.");
            }

            return new ApiResult(product);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {
            var createdProduct = await this.productRepository.CreateProduct(product);

            return new ApiResult(createdProduct);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<Product> productJsonPatch)
        {
            if (id <= 0)
            {
                throw new BadRequestException("The id parameter has to be greater than 0.");
            }

            var updatedProduct = await this.productRepository.UpdateProduct(id, productJsonPatch);

            return new ApiResult(updatedProduct);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                throw new BadRequestException("The id parameter has to be greater than 0.");
            }

            var deletedProduct = await this.productRepository.DeleteProduct(id);

            return new ApiResult(deletedProduct);
        }
    }
}
