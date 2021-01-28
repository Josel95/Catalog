using Catalog.Core.Exceptions;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Catalog.Api.Filters
{
    public class ModelValidatorFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context)
        {
            if (!context.ModelState.IsValid)
            {
                Dictionary<string, string[]> errors = new Dictionary<string, string[]>();

                foreach (var field in context.ModelState)
                {
                    errors.Add(field.Key.ToLower(), field.Value.Errors.Select(error => error.ErrorMessage).ToArray());
                }

                throw new ModelValidationException(errors);
            }
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {

        }
    }
}
