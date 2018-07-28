using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DangersOfLazyLoadingInASPNETCore.Models;
using DangersOfLazyLoadingInASPNETCore.Data;

namespace DangersOfLazyLoadingInASPNETCore.Controllers
{
  public class HomeController : Controller
  {
    private readonly LazyContext _ctx;

    public HomeController(LazyContext ctx)
    {
      _ctx = ctx;
    }
    public IActionResult Index()
    {
      return View(_ctx.People.ToList());
    }

    public IActionResult About()
    {
      ViewData["Message"] = "Your application description page.";

      return View();
    }

    public IActionResult Contact()
    {
      ViewData["Message"] = "Your contact page.";

      return View();
    }

    public IActionResult Privacy()
    {
      return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}
