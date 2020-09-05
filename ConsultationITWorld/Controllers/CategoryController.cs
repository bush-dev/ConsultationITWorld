using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultationITWorld.Data.Models;
using ConsultationITWorld.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ConsultationITWorld.Core.Interfaces;

namespace ConsultationITWorld.Controllers
{ 
    
    public class CategoryController : Controller
    {

        private ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        public IActionResult GetCategory(int id)
        {
            var category = _categoryService.GetCategory(1);
            return null;
        }

        public IActionResult UpdateCategory(int id)
        {
            _categoryService.UpdateCategory(id);

            return null;
        }

        public IActionResult DeleteCategory(int id)
        {
            _categoryService.DeleteCategory(id);

            return null;
        }

        public IActionResult CreateCategory(Category category)
        {
            _categoryService.CreateCategory(category);

            return null;
        }

        public IActionResult GetCategories()
        {
            var categories = _categoryService.GetCategories();

            return null;
        }


    }
}
