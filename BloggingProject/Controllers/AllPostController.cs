using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BloggingProject.BlogPostServiceLayer;
using BloggingProject.Models;
using Microsoft.Owin;


namespace BloggingProject.Controllers
{
    public class AllPostController : ApiController
    {
        IBlogPostService postService = new BlogPostService();
        public IEnumerable<GetPostData> Get()
        {
            return postService.GetAllPosts();
        }
        public GetPostData Get(int id)
        {
            return postService.GetAllPostsById(id);
        }
        public IEnumerable<GetPostData> Get(string author)
        {
            return postService.GetAllPostsByAuthor(author);
        }
        //Post Api
        [Authorize]
        public void Post([FromBody] PostTb postTb)
        {
            postService.PostBlog(postTb);
        }
        public void Put(int id, [FromBody] PostTb postTb)
        {
            postService.EditPostBlog(id, postTb);
        }
    }
}
