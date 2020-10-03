using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultationITWorld.Core.Interfaces;
using ConsultationITWorld.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace ConsultationITWorld.Controllers
{
    [Route("[controller]")]
    public class ReviewController : Controller
    {
        private IReviewService _reviewService;
        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        [HttpGet("getreview")]
        public IActionResult GetReview(int idReview)
        {
            _reviewService.GetReview(idReview);
            return View();
        }

        [HttpGet]
        public IActionResult GetReviews()
        {
            _reviewService.GetReviews();
            return View();
        }

        [HttpDelete]
        public IActionResult DeleteReview(int idReview)
        {
            _reviewService.DeleteReview(idReview);
            return View();
        }
        
        [HttpPut]
        public IActionResult UpdateReview(Review review)
        {
            _reviewService.UpdateReview(review);
            return View();
        }

        [HttpPost]
        public IActionResult AddReview(Review review)
        {
            _reviewService.AddReview(review);
            return View();
        }
    }
}
