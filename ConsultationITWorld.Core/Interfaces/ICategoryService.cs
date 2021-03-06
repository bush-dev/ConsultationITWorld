﻿using ConsultationITWorld.Data.Models;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultationITWorld.Core.Interfaces
{
    public interface ICategoryService
    {
        Category GetCategory(int id);
        void DeleteCategory(int id);
        void UpdateCategory(int id);
        void CreateCategory(Category category);
        List<Category> GetCategories();
    }
}
