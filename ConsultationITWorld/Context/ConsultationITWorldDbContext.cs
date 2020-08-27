using ConsultationITWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace ConsultationITWorld.Context
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
