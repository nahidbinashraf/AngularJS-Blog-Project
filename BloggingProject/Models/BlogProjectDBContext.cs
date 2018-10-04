namespace BloggingProject.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class BlogProjectDBContext : ApplicationDbContext
    {
        public BlogProjectDBContext()
           
        {
        }

        public DbSet<CommentsTb> CommentsTbs { get; set; }
        public DbSet<PostTb> PostTbs { get; set; }
 

        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{

        //}
    }
}
