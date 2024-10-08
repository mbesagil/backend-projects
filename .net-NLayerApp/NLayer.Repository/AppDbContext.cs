using Microsoft.EntityFrameworkCore;
using NLayer.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace NLayer.Repository
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        internal void SavedChanges()
        {
            throw new NotImplementedException();
        }

        public DbSet<ProductFeature> ProductFeature { get; set; }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            modelbuilder.Entity<ProductFeature>().HasData(new ProductFeature()
            {
                Id=1,
                Color="Red",
                Height=100,
                Width=200,
                ProductId=1,
            },

            new ProductFeature()
            {
                Id = 2,
                Color = "Red",
                Height = 200,
                Width = 500,
                ProductId = 2,
            });

            base.OnModelCreating(modelbuilder);

        }


    }
}
