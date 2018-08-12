namespace HasDataRelatedEntity.Data
{
  public class Toy
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public Person Owner { set; get; }
  }
}