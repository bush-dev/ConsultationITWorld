using ConsultationITWorld.Data.Context;
using ConsultationITWorld.Core.Interfaces;
using ConsultationITWorld.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ConsultationITWorld.Core.Services
{
    public class OfferService : IOfferService
    {
        private ConsultationITWorldDbContext _dbContext;


        public OfferService(ConsultationITWorldDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Offer GetOffer(int idOffer)
        {
            return _dbContext.Offers.Where(x => x.Id == idOffer).FirstOrDefault();
        }

        public List<Offer> GetOffers()
        {
            return _dbContext.Offers.ToList();
        }

        public void UpdateOffer(Offer offer)
        {
            var offerToUpdate = _dbContext.Offers.Where(x => x.Id == offer.Id).FirstOrDefault();
            offerToUpdate.IdCategory = offer.IdCategory;
            offerToUpdate.IdMainTechnology = offer.IdMainTechnology;
            offerToUpdate.IdUser = offer.IdUser;
            offerToUpdate.Prize = offer.Prize;
            offerToUpdate.Title = offer.Title;
            _dbContext.SaveChanges();
        }

        public void DeleteOffer(int idOffer)
        {
            var offer = _dbContext.Offers.Where(x => x.Id == idOffer).FirstOrDefault();
            _dbContext.Offers.Remove(offer);
            _dbContext.SaveChanges();
        }

        public void AddOffer(Offer offer)
        {
            _dbContext.Offers.Add(offer);
            _dbContext.SaveChanges();
        }

    }
}
