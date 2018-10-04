using BloggingProject.BlogPostDataMapperLayer;
using BloggingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BloggingProject.BlogPostServiceLayer
{
    public class BlogPostService: IBlogPostService
    {
        IBlogPostDataMapper blogPostDataMapper = new BlogPostDataMapper();
        //for getting all post
        public IEnumerable<GetPostData> GetAllPosts()
        {
            return  blogPostDataMapper.GetAllPost();

        }
        //for getting all post by id
        public GetPostData GetAllPostsById(int id)
        {
            return blogPostDataMapper.GetAllPostById(id);

        }
        //for getting all post by author
        public IEnumerable<GetPostData> GetAllPostsByAuthor(string author)
        
        {
            return  blogPostDataMapper.GetAllPostByAuthor(author);

        }
        //for getting my post
        public IEnumerable<GetMyPost> GetMyPosts(string author)
        {
            return blogPostDataMapper.GetMyPost(author);
        }   
        //for getting my comments
        public IEnumerable<GetPostCommentsData> GetComment(int id)
        {
            return blogPostDataMapper.GetComments(id);
        }
        //for psoting blog post
        public void PostBlog([FromBody] PostTb postTb)
        {
            blogPostDataMapper.PostBlog(postTb);
        }
        //for posting comment 
        public void PostComments([FromBody] CommentsTb commentsTbs)
        {
            blogPostDataMapper.PostComment(commentsTbs);
        }
        //for deleting my post
        public void DeleteMyPosts(int id)
        {
            blogPostDataMapper.DeleteMyPost(id);
        }

        public void EditPostBlog(int id, [FromBody] PostTb postTb)
        {
            blogPostDataMapper.EditPostBlog(id,postTb);
        }
    }
}