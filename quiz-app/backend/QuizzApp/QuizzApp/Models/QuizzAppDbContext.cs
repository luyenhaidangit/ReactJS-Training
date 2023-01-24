using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace QuizzApp.Models
{
    public partial class QuizzAppDbContext : DbContext
    {
        public QuizzAppDbContext()
            : base("name=QuizzAppDbContext")
        {
        }

        public virtual DbSet<Participant> Participant { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
