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
    [Route("[controller]")]
    public class CategoryController : Controller
    {

        private ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet("getcategory")]
        public IActionResult GetCategory(int id)
        {
            var category = _categoryService.GetCategory(1);
            return null;
        }

        [HttpPut]
        public IActionResult UpdateCategory(int id)
        {
            _categoryService.UpdateCategory(id);

            return null;
        }

        [HttpDelete]
        public IActionResult DeleteCategory(int id)
        {
            _categoryService.DeleteCategory(id);

            return null;
        }

        [HttpPost]
        public IActionResult CreateCategory(Category category)
        {
            _categoryService.CreateCategory(category);

            return null;
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            var categories = _categoryService.GetCategories();

            return null;
        }


    }
}
