using ConsultationITWorld.Context;
using ConsultationITWorld.Interfaces;
using ConsultationITWorld.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ConsultationITWorld.Services
{
    public class ReviewService : IReviewService
    {

        private ConsultationITWorldDbContext _dbContext;

        public ReviewService(ConsultationITWorldDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public void AddReview(Review review)
        {
            _dbContext.Reviews.Add(review);
            _dbContext.SaveChanges();
        }

        public void UpdateReview(Review review)
        {
            var reviewToUpdate = _dbContext.Reviews.Where(x => x.Id == review.Id).FirstOrDefault();
            reviewToUpdate.Description = review.Description;
            reviewToUpdate.IdOffer = review.IdOffer;
            _dbContext.SaveChanges();
            
        }

        public void DeleteReview(int idReview)
        {
            var review = _dbContext.Reviews.Where(x => x.Id == idReview).FirstOrDefault();
            _dbContext.Reviews.Remove(review);
            _dbContext.SaveChanges();
        }

        public Review GetReview(int idReview)
        {
            return _dbContext.Reviews.Where(x => x.Id == idReview).FirstOrDefault();
        }

        public List<Review> GetReviews()
        {
            return _dbContext.Reviews.ToList();
        }

    }
}
