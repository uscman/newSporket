import LatestPosts from "./LatestPosts"

const Sidebar = ({  latest_posts }) => {

  const latest_post = latest_posts.fields.relatedBlogPosts
  return (
    <div className="col-lg-4">
      <div className="side-bar">
     
       <LatestPosts latest_posts={latest_post} />
       
      </div>
    </div>
  )
}

export default Sidebar