using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Catalog.Api.Responses
{
    public class ApiResult : IActionResult
    {
        public string Message { get; set; }
        public Dictionary<string, string[]> Errors { get; set; }
        public Object Data { get; set; }

        public ApiResult(Object data)
        {
            this.Data = data;
        }

        public async Task ExecuteResultAsync(ActionContext context)
        {
            var result = new ObjectResult(this);

            await result.ExecuteResultAsync(context);
        }
    }
}
