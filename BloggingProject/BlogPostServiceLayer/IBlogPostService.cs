using BloggingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace BloggingProject.BlogPostServiceLayer
{
    public interface IBlogPostService
    {
        IEnumerable<GetPostData> GetAllPosts();
        IEnumerable<GetPostData> GetAllPostsByAuthor(string author);
        GetPostData GetAllPostsById(int id);
        void PostBlog([FromBody] PostTb postTb);
        //IMyPost
        IEnumerable<GetMyPost> GetMyPosts(string author);
        void DeleteMyPosts(int id);
        IEnumerable<GetPostCommentsData> GetComment(int id);
        void PostComments([FromBody] CommentsTb commentsTbs);
        void EditPostBlog(int id, [FromBody] PostTb postTb);
    }
}
