using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace DangersOfLazyLoadingInASPNETCore.Data
{
  public class LazyContext : DbContext
  {
    private readonly IConfiguration _config;

    public LazyContext(DbContextOptions options, IConfiguration config) : base(options)
    {
      _config = config;
    }

    public DbSet<Person> People { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder opt)
    {
      base.OnConfiguring(opt);

      opt.UseSqlServer(_config.GetConnectionString("DangersDb"));
      opt.UseLazyLoadingProxies();
    }

    protected override void OnModelCreating(ModelBuilder bldr)
    {
      base.OnModelCreating(bldr);

      bldr.Entity<Person>()
        .HasData(new[]
        {
          new
          {
            Id = 1,
            Name = "Shawn",
            AddressId = 1
          },
          new
          {
            Id = 2,
            Name = "Tom",
            AddressId = 2
          },
          new
          {
            Id = 3,
            Name = "Sally",
            AddressId = 3
          }
        });

      bldr.Entity<Address>()
        .HasData(new[]
        {
          new
          {
            Id = 1,
            FullAddress = "123 Main Street",
          },
          new
          {
            Id = 2,
            FullAddress = "124 Main Street"
          },
          new
          {
            Id = 3,
            FullAddress = "125 Main Street"
          }
        });
    }

}
}
