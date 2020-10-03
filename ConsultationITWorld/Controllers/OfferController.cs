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
    [Route("[controller]")]
    public class OfferController : Controller
    {
        private IOfferService _offerService;

        public OfferController(IOfferService offerService)
        {
            _offerService = offerService;
        }
        
        [HttpGet("getoffer")]
        public IActionResult GetOffer(int idOffer)
        {
            _offerService.GetOffer(idOffer);
            return View();
        }

        [HttpGet]
        public IActionResult GetOffers()
        {
            _offerService.GetOffers().ToList();
            return View();
        }

        [HttpPut]
        public IActionResult UpdateOffer(Offer offer)
        {
            _offerService.UpdateOffer(offer);
            return View();
        }

        [HttpDelete]
        public IActionResult DeleteOffer(int idOffer)
        {
            _offerService.DeleteOffer(idOffer);
            return View();
        }

        [HttpPost]
        public IActionResult AddOffer(Offer offer)
        {
            _offerService.AddOffer(offer);
            return View();
        }
    }
}
