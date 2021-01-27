using Catalog.Core.Entities;
using Catalog.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.JsonPatch;

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
            try
            {
                var products = await this.productRepository.GetProducts();

                return Ok(products);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "An error ocurred.");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            if (id <= 0)
            {
                return BadRequest("The id parameter has to be greater than 0.");
            }

            try
            {
                var product = await this.productRepository.GetProduct(id);

                if(product == null)
                {
                    return NotFound("The product was not found.");
                }

                return Ok(product);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "An error ocurred.");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(Product product)
        {
            try
            {
                var createdProduct = await this.productRepository.CreateProduct(product);

                return Ok(createdProduct);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "An error ocurred.");
            }
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<Product> productJsonPatch)
        {
            if (id <= 0)
            {
                return BadRequest("The id parameter has to be greater than 0.");
            }

            try
            {
                var updatedProduct = await this.productRepository.UpdateProduct(id, productJsonPatch);

                return Ok(updatedProduct);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "An error ocurred.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("The id parameter has to be greater than 0.");
            }

            try
            {
                var deletedProduct = await this.productRepository.DeleteProduct(id);

                return Ok(deletedProduct);
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, "An error ocurred.");
            }
        }
    }
}
