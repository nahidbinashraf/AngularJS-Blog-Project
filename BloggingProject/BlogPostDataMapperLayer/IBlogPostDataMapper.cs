using BloggingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace BloggingProject.BlogPostDataMapperLayer
{
    public interface IBlogPostDataMapper
    {
        IEnumerable<GetPostData> GetAllPost();
        GetPostData GetAllPostById(int id);
        IEnumerable<GetPostData> GetAllPostByAuthor(string author);
        void PostBlog([FromBody] PostTb postTb);

        void EditPostBlog(int id,[FromBody] PostTb postTb);
        //IMyPost
        IEnumerable<GetMyPost> GetMyPost(string author);
        void DeleteMyPost(int id);
        IEnumerable<GetPostCommentsData> GetComments(int id);

        void PostComment([FromBody] CommentsTb commentsTbs);

        

    }
}
