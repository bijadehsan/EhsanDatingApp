using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.DataContext
{
    public class EhsanDataContext : DbContext

    {
        public EhsanDataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<AppUser> Users { get; set; }
    }
}
