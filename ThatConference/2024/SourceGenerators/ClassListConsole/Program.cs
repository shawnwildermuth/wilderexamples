using System.Reflection;
using static System.Console;

//var classTypes = Assembly.GetEntryAssembly()?
//  .GetTypes()
//  .Where(t => t.IsClass && t.IsPublic)
//  .ToList();

//if (classTypes is not null)
//{
  foreach (var c in ClassListGenerator.ClassList.Names)
  {
    WriteLine(c);
  }
//}


public class AnotherSillyClass { }