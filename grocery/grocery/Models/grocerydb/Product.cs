using System;
using System.Collections.Generic;

#nullable disable

namespace grocery.Models.grocerydb
{
    public partial class Product
    {
        public int ProductId { get; set; }
        public string PName { get; set; }
        public int? CategoryId { get; set; }
        public int Prodquantity { get; set; }
        public int Price { get; set; }
        public string Photo { get; set; }
        public string Description { get; set; }

        public virtual ProductCategory Category { get; set; }
    }
}
