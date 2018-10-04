namespace BloggingProject.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("CommentsTb")]
    public partial class CommentsTb
    {
        [Key]
        public int CommentId { get; set; }

        [StringLength(50)]
        public string CommentsName { get; set; }

        public string CommentsDetails { get; set; }

        public int? PostFid { get; set; }
        //public virtual List<PostTb> PostTbs { get; set; }
    }
}
