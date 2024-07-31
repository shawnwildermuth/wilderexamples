using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace ClassListGenerator;

[Generator]
public class TheGenerator : IIncrementalGenerator
{
  public void Initialize(
    IncrementalGeneratorInitializationContext context)
  {
    var provider = context.SyntaxProvider.CreateSyntaxProvider(
      predicate: static (node, _) => node is ClassDeclarationSyntax,
      transform: static (ctx, _) => (ClassDeclarationSyntax)ctx.Node
      )
      .Where(static n => n is not null);

    var compilation = context.CompilationProvider.Combine(provider.Collect());

    context.RegisterSourceOutput(compilation, Execute);
  }

  static void Execute(SourceProductionContext context, 
    (Compilation Left, ImmutableArray<ClassDeclarationSyntax> Right) tuple)
  {
    var (compilation, list) = tuple;

    var items = new List<string>();

    foreach (var syntax in list)
    {
      var symbol = compilation
        .GetSemanticModel(syntax.SyntaxTree)
        .GetDeclaredSymbol(syntax) as INamedTypeSymbol;

      items.Add(@$"""{symbol.ToDisplayString()}""");
    }

    var joined = string.Join(", ", items);

    var code = $$"""
      namespace ClassListGenerator;

      public class ClassList
      {
        public static List<string> Names = new()
        {
           {{ joined }}
        };
      }
      """;

    context.AddSource("YourClassList.g.cs", code);
  }
}
