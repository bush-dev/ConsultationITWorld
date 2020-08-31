
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultationITWorld.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure.Internal;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using ConsultationITWorld.Services;
using ConsultationITWorld.Interfaces;

namespace ConsultationITWorld
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ConsultationITWorldDbContext>(x => x.UseSqlServer(Configuration.GetConnectionString("LocalDB")));
            services.AddControllers();
            services.AddTransient<ICategoryService,CategoryService>();
            services.AddTransient<IReviewService, ReviewService>();
            services.AddTransient<IOfferService, OfferService>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            //   app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

            app.UseHttpsRedirection();
            app.UseRouting();
            
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
