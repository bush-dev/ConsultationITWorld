using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ConsultationITWorld.Interfaces;
using ConsultationITWorld.Models;
using Microsoft.AspNetCore.Mvc;

namespace ConsultationITWorld.Controllers
{
    public class ReviewController : Controller
    {
        private IReviewService _reviewService;
        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        public IActionResult GetReview(int idReview)
        {
            _reviewService.GetReview(idReview);
            return View();
        }

        public IActionResult GetReviews()
        {
            _reviewService.GetReviews();
            return View();
        }

        public IActionResult DeleteReview(int idReview)
        {
            _reviewService.DeleteReview(idReview);
            return View();
        }

        public IActionResult UpdateReview(Review review)
        {
            _reviewService.UpdateReview(review);
            return View();
        }

        public IActionResult AddReview(Review review)
        {
            _reviewService.AddReview(review);
            return View();
        }
    }
}
