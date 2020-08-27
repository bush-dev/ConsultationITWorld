using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultationITWorld.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }
        public string Description { get; set; }
        [ForeignKey("Offer")]
        public int IdOffer { get; set; }
        [ForeignKey("User")]
        public int IdUser { get; set; }
    }
}
