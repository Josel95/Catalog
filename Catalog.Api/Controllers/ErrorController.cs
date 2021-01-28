using Catalog.Api.Responses;
using Catalog.Core.Exceptions;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Catalog.Api.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ControllerBase
    {
        [Route("error")]
        public object Error ()
        {
            var context = HttpContext.Features.Get<IExceptionHandlerFeature>();
            var status = HttpStatusCode.InternalServerError;
            var exception = context.Error;

            var apiResult = new ApiResult(null);

            if (exception is ModelValidationException)
            {
                apiResult.Errors = ((ModelValidationException)exception).errors;
                status = HttpStatusCode.BadRequest;
            }
            else if (exception is NotFoundException) status = HttpStatusCode.NotFound;
            else if (exception is BadRequestException) status = HttpStatusCode.BadRequest;

            apiResult.Message = status == HttpStatusCode.InternalServerError 
                ? "An error has ocurred" 
                : exception.Message;

            Response.StatusCode = (int)status;

            return apiResult;
        }
    }
}
