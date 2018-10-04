using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BloggingProject.Models
{
    public class GetMyPost
    {
        public int MyPostId { get; set; }
        public string MyUsername { get; set; }
        public string MyPostttile { get; set; }
        public string MyPostDetails { get; set; }
        public double? MyPostRating { get; set; }
    }
}