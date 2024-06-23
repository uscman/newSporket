import PostContent from './PostContent';
import RecentPosts from './RecentPosts';


const SingleBlog = ({blog, blogsdata}) => {
  return (
    <section className="section-padding" s>
      <div className="container">
        <div className="row">
          <PostContent blog={blog}/>
          <RecentPosts blogsdata={blogsdata} />
        </div>
      </div>
           
    </section>
  )
}

export default SingleBlog;