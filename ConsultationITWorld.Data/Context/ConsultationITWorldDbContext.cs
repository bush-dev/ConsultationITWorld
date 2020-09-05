using ConsultationITWorld.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace ConsultationITWorld.Data.Context
{
    public class ConsultationITWorldDbContext : DbContext 
    {
        public ConsultationITWorldDbContext(DbContextOptions<ConsultationITWorldDbContext> options) : base(options) { }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Offer> Offers { get; set; }
        public virtual DbSet<MainTechnology> MainTechnologies { get; set; }
        public virtual DbSet<Review> Reviews { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
    }
}
