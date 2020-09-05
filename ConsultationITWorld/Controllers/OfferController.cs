using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;
using ConsultationITWorld.Core.Interfaces;
using ConsultationITWorld.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace ConsultationITWorld.Controllers
{
    public class OfferController : Controller
    {
        private IOfferService _offerService;

        public OfferController(IOfferService offerService)
        {
            _offerService = offerService;
        }
        public IActionResult GetOffer(int idOffer)
        {
            _offerService.GetOffer(idOffer);
            return View();
        }

        public IActionResult GetOffers()
        {
            _offerService.GetOffers().ToList();
            return View();
        }

        public IActionResult UpdateOffer(Offer offer)
        {
            _offerService.UpdateOffer(offer);
            return View();
        }

        public IActionResult DeleteOffer(int idOffer)
        {
            _offerService.DeleteOffer(idOffer);
            return View();
        }
        public IActionResult AddOffer(Offer offer)
        {
            _offerService.AddOffer(offer);
            return View();
        }
    }
}
