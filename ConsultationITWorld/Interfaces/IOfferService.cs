using ConsultationITWorld.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultationITWorld.Interfaces
{
    public interface IOfferService
    {
        void AddOffer(Offer offer);
        void UpdateOffer(Offer offer);
        void DeleteOffer(int idOffer);
        Offer GetOffer(int idOffer);
        List<Offer> GetOffers();
    }
}
