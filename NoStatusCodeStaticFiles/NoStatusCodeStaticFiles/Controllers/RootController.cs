using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NoStatusCodeStaticFiles.Controllers
{
  [Route("")]
  public class RootController : Controller
  {
    [HttpGet("")]
    public IActionResult Index()
    {
      return View();
    }

    [HttpGet("error")]
    public IActionResult Error()
    {
      return View();
    }
  }
}
