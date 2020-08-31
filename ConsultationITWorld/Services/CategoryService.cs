using ConsultationITWorld.Context;
using ConsultationITWorld.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ConsultationITWorld.Services
{
    public class CategoryService : ICategoryService
    {

        private ConsultationITWorldDbContext _dbContext;
        public CategoryService(ConsultationITWorldDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        
        public Category GetCategory(int id)
        {
            
            return _dbContext.Categories.Where(x => x.Id == id).FirstOrDefault();
        }

        public void DeleteCategory(int id)
        {
            var category = _dbContext.Categories.Where(x => x.Id == id).FirstOrDefault();
            _dbContext.Categories.Remove(category);
            _dbContext.SaveChanges();
        }

        public void UpdateCategory(int id)
        {
            var category = _dbContext.Categories.Where(x => x.Id == id).FirstOrDefault();
            category.Name = "";
            _dbContext.SaveChanges();
        }

        public void CreateCategory(Category category)
        {
            _dbContext.Categories.Add(category);
            _dbContext.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _dbContext.Categories.ToList();
        }
    }
}
