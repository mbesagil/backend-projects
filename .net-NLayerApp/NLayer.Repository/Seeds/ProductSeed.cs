using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NLayer.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NLayer.Repository.Seeds
{
    internal class ProductSeed : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasData(new Product
            {
                Id = 1,
                Name = "kalem1",
                CategoryId = 1,
                Price = 100,
                Stock = 20,
                CreatedDate = DateTime.Now
            },
            new Product
            {
                Id = 2,
                Name = "kalem2",
                CategoryId = 1,
                Price = 200,
                Stock = 30,
                CreatedDate = DateTime.Now
            },
            new Product
            {
                Id = 3,
                Name = "kalem4",
                CategoryId = 1,
                Price = 400,
                Stock = 40,
                CreatedDate = DateTime.Now
            },
            new Product
            {
                Id = 4,
                Name = "defter1",
                CategoryId = 2,
                Price = 50,
                Stock = 100,
                CreatedDate = DateTime.Now
            },
            new Product
            {
                Id = 5,
                Name = "defter2",
                CategoryId = 2,
                Price = 50,
                Stock = 100,
                CreatedDate = DateTime.Now
            },
            new Product
            {
                Id = 6,
                Name = "kitap1",
                CategoryId = 3,
                Price = 100,
                Stock = 20,
                CreatedDate = DateTime.Now
            });
        }
    }
}
