using ConsultationITWorld.Controllers;
using ConsultationITWorld.Core.Interfaces;
using ConsultationITWorld.Core.Services;
using ConsultationITWorld.Data.Context;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using Xunit;

namespace ConsultationITWorld.XUnitTest
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var mockService = new Mock<ICategoryService>();
            mockService.Setup(x => x.GetCategories());
            var controller = new CategoryController(mockService.Object);



            IActionResult result = controller.GetCategories();
        }

        [Fact]
        public void Test2()
        {
            var mockService = new Mock<ICategoryService>();
            mockService.Setup(x => x.GetCategory(2));
            var controller = new CategoryController(mockService.Object);



            IActionResult result = controller.GetCategory(2);
        }
    }
}
