using BloggingProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BloggingProject.BlogPostDataMapperLayer
{
    public class BlogPostDataMapper: IBlogPostDataMapper
    {
        BlogProjectDBContext db = new BlogProjectDBContext();

        
        //for getting all post 
        public IEnumerable<GetPostData> GetAllPost()
        {
            var Allpost = (from u in db.Users
                           join p in db.PostTbs on u.Id equals p.UserFId

                           select new GetPostData
                           {
                               Username = u.UserName,
                               Postttile = p.PostTitle,
                               PostDetails = p.Postdetails,
                               PostId = p.PostId,
                               Rating = p.Rating,
                               
                           });
            return Allpost.ToList();
        }    
        //for getting all post by id 
        public GetPostData GetAllPostById(int id)
        {
            var Allpost = (from u in db.Users
                           join p in db.PostTbs on u.Id equals p.UserFId

                           select new GetPostData
                           {
                               Username = u.UserName,
                               Postttile = p.PostTitle,
                               PostDetails = p.Postdetails,
                               PostId = p.PostId,
                               Rating = p.Rating
                           });
            return Allpost.ToList().FirstOrDefault(x => x.PostId == id) ;
        } //for getting all post by author
        public IEnumerable<GetPostData> GetAllPostByAuthor(string author)
        {
            var Allpost = (from u in db.Users
                           join p in db.PostTbs on u.Id equals p.UserFId

                           select new GetPostData
                           {
                               Username = u.UserName,
                               Postttile = p.PostTitle,
                               PostDetails = p.Postdetails,
                               PostId = p.PostId,
                               Rating = p.Rating
                           });
            return Allpost.ToList().Where(x => x.Username == author).ToList();
        }
        //for getting my post 
        public IEnumerable<GetMyPost> GetMyPost(string author)
        {
            
            var Allmypost = (from u in db.Users
                             join p in db.PostTbs on u.Id equals p.UserFId
                             select new GetMyPost
                             {
                                 MyPostId = p.PostId,
                                 MyUsername = u.UserName,
                                 MyPostttile = p.PostTitle,
                                 MyPostDetails = p.Postdetails,
                                 MyPostRating = p.Rating

                             });
            return Allmypost.Where(x => x.MyUsername == author).ToList();
        }
        //for getting comments 
        //Get Api
        public IEnumerable<GetPostCommentsData> GetComments(int id)
        {

            var CommentsPost = (from p in db.PostTbs
                                join c in db.CommentsTbs on p.PostId equals c.PostFid
                                where (p.PostId == id)
                                select new GetPostCommentsData
                                {
                                    CommentName = c.CommentsName,
                                    Comments = c.CommentsDetails,

                                });
            return CommentsPost.ToList();
        }
        //for posting new blogpost
        public void PostBlog([FromBody] PostTb postTb)
        {
            
                db.PostTbs.Add(postTb);
                db.SaveChanges();
         
        }
        //for posting comments
        public void PostComment([FromBody] CommentsTb commentsTbs)
        {
            db.CommentsTbs.Add(commentsTbs);
            db.SaveChanges();
        }
        //for deleting my blogpost
        public void DeleteMyPost(int id)
        {
            var entity = db.PostTbs.FirstOrDefault(e => e.PostId == id);
            db.PostTbs.Remove(entity);
            db.SaveChanges();
        }

        public void EditPostBlog(int id,[FromBody] PostTb postTb)
        {
            var entities = db.PostTbs.FirstOrDefault(e => e.PostId == id);
            entities.Rating = postTb.Rating;        
            db.SaveChanges();
        }
    }
}