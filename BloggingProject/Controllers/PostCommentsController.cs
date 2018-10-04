using BloggingProject.BlogPostServiceLayer;
using BloggingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BloggingProject.Controllers
{
    public class PostCommentsController : ApiController
    {
        IBlogPostService blogPostService = new BlogPostService();

        //Get Api
        public IEnumerable<GetPostCommentsData> Get(int id)
        {
           return blogPostService.GetComment(id);
        }
        //Post Api
        public void Post([FromBody] CommentsTb commentsTbs)
        {
           blogPostService.PostComments(commentsTbs);
        }
    }
}
