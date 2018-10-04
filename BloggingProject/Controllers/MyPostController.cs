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
    [Authorize]
    public class MyPostController : ApiController
    {
        IBlogPostService blogPostService = new BlogPostService();
        public IEnumerable<GetMyPost> Get(string author)
        {

            return  blogPostService.GetMyPosts(author);
        }
        public void Delete(int id)
        {
           blogPostService.DeleteMyPosts(id);
        }
   
    }
}
