using System;
using System.Collections.Generic;

#nullable disable

namespace grocery.Models.grocerydb
{
    public partial class ProductCategory
    {
        public ProductCategory()
        {
            Products = new HashSet<Product>();
        }

        public int CategoryId { get; set; }
        public string CName { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}
