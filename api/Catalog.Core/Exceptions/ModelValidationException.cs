using System;
using System.Collections.Generic;
using System.Text;

namespace Catalog.Core.Exceptions
{
    public class ModelValidationException : Exception
    {
        public Dictionary<string, string[]> errors;

        public ModelValidationException(string message) : base(message)
        {

        }

        public ModelValidationException(Dictionary<string, string[]> errors, string message = "") : base(message)
        {
            this.errors = errors;
        }
    }
}
