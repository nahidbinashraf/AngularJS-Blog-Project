using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BloggingProject.Models
{
    public class GetPostData
    {
        public int PostId { get; set; }
        public string Username { get; set; }
        public string Postttile { get; set; }
        public string PostDetails { get; set; }
        public double? Rating { get; set; }

    }
}