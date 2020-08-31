using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ConsultationITWorld.Models
{
    public class Offer
    {
        [Key]
        public int Id { get; set; }
        public string Title{ get; set; }
        public int Prize { get; set; }
        public string Description { get; set; }
        [ForeignKey("User")]
        public int IdUser { get; set; }
        [ForeignKey("Category")]
        public int IdCategory { get; set; }
        [ForeignKey("MainTechnology")]
        public int IdMainTechnology { get; set; }

    }
}
