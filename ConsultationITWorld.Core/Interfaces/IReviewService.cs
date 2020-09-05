using ConsultationITWorld.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultationITWorld.Core.Interfaces
{
    public interface IReviewService
    {
        void AddReview(Review review);
        void UpdateReview(Review review);
        void DeleteReview(int idReview);
        Review GetReview(int idReview);
        List<Review> GetReviews();
    }
}
