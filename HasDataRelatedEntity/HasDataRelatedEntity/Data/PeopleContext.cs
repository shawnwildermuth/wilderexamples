using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HasDataRelatedEntity.Data
{
  public class PeopleContext : DbContext
  {
    private readonly IConfiguration _config;

    public PeopleContext(DbContextOptions options, IConfiguration config) : base(options)
    {
      _config = config;
    }

    public DbSet<Person> People { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder bldr)
    {
      base.OnConfiguring(bldr);

      // Connect to local Db
      bldr.UseSqlServer(_config.GetConnectionString("PeopleDb"));
    }

    protected override void OnModelCreating(ModelBuilder bldr)
    {
      base.OnModelCreating(bldr);

      bldr.Entity<Person>()
        .Property(p => p.Name)
        .HasMaxLength(100);

      bldr.Entity<Person>()
        .HasData(new
        {
          Id = 1,
          Name = "Shawn Wildermuth",
          Birthdate = DateTime.Parse("1969-04-05")
        },
        new
        {
          Id = 2,
          Name = "Julie Lerman",
          Birthdate = DateTime.Parse("1975-07-05")
        }
        );

      bldr.Entity<Toy>()
        // Anonymous Type, not Toy Type
        .HasData(new 
        {
          Id = 1,
          Name = "Tonka Truck",
          OwnerId = 1 // Just Works Now
        }
        );

    }
  }
}
