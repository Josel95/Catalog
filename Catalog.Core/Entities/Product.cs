using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Catalog.Core.Entities
{
    public class Product
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The name field is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "The price field is required.")]
        [Range(0.0, float.MaxValue, ErrorMessage = "The price value must be greater than 0.")]
        public float Price { get; set; }

        [MaxLength(240, ErrorMessage = "The description length must be minor than 240.")]
        public string Description { get; set; }

        public string Image { get; set; }

        public DateTime ReleaseDate { get; set; }

        public bool IsActive { get; set; }
    }
}
