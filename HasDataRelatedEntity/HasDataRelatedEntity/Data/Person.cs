using System;
using System.Collections.Generic;

namespace HasDataRelatedEntity.Data
{
  public class Person
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime Birthdate { get; set; }
    public ICollection<Toy> Toys { get; set; }
  }
}