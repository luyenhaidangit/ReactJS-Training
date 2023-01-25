namespace QuizzApp.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Participant")]
    public partial class Participant
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string email { get; set; }

        [Required]
        [StringLength(50)]
        public string password { get; set; }

        [Required]
        [StringLength(50)]
        public string username { get; set; }

        [StringLength(50)]
        public string image { get; set; }

        [StringLength(500)]
        public string refresh_token { get; set; }
    }
}
