namespace BloggingProject.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PostTb")]
    public partial class PostTb
    {
        [Key]
        public int PostId { get; set; }

        [StringLength(150)]
        public string PostTitle { get; set; }

        public string Postdetails { get; set; }

        public string UserFId { get; set; }

        public double? Rating { get; set; }

     



    }
}
