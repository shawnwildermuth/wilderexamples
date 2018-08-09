using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace NoStatusCodeStaticFiles
{
  public class Startup
  {
    const string IGNORE = "IGNORE";

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      // Standard Way to handle this makes 
      // Static Files return 302 then a 200 on the redirect
      //app.UseStatusCodePagesWithRedirects("/Error");
      //app.UseStaticFiles();

      // Only way I can see how to return real 404's
      app.UseStatusCodePages(new StatusCodePagesOptions()
      {
        HandleAsync = ctx =>
        {
          // Ignore if from Static Files
          if (ctx.HttpContext.Response.StatusCode != 404 &&
          ctx.HttpContext.Items.ContainsKey(IGNORE) &&
          ((bool)ctx.HttpContext.Items[IGNORE]))
          {
            // Do Nothing
          }
          else
          {
            ctx.HttpContext.Response.Redirect("/error/404");
          }

          return ctx.Next.Invoke(ctx.HttpContext);
        }
      });

      app.UseStaticFiles(new StaticFileOptions()
      {
        OnPrepareResponse = ctx =>
        {
          if (ctx.Context.Response.StatusCode == 404)
          {
            // Mark this as ignore
            ctx.Context.Items.Add(IGNORE, true);
          }
        }
      });


      app.UseMvc();
    }
  }
}
