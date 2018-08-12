using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HasDataRelatedEntity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HasDataRelatedEntity.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PeopleController : ControllerBase
  {
    private readonly PeopleContext _ctx;

    public PeopleController(PeopleContext ctx)
    {
      _ctx = ctx;
    }

    // GET api/values
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Person>>> Get()
    {
      return Ok(await _ctx.People.Include(p => p.Toys)
        .OrderBy(p => p.Name)
        .ToListAsync());
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Person>> Get(int id)
    {
      return Ok(await _ctx.People.Include(p => p.Toys)
        .Where(p => p.Id == id)
        .OrderBy(p => p.Name)
        .FirstOrDefaultAsync());
    }


  }
}
