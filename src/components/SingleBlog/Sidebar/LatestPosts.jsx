/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const LatestPosts = ({ latest_posts }) => {
  // Extracting only the first three posts
  // const firstThreePosts = latest_posts.slice(0, 3);

  return (
    <div className="widget last-post-thum" style={{marginTop:'0px'}}>
      <h6 className="title-widget">Related Posts</h6>
      {
        latest_posts.map((post, idx) => (
          <div className="item" key={idx}>
            <div className="valign">
              <div className="img">
                <Link href="/blog-grid-modern"><img src={post.fields.thumbnail.fields.file.url} alt="" /></Link>
              </div>
            </div>
            <div className="cont">
              <h6><Link href="/blog-grid-creative">{ post.fields.title }</Link></h6>
              <span><Link href="/blog-grid-creative">{ post.fields.date }</Link></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LatestPosts;
