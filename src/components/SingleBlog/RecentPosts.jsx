/* eslint-disable @next/next/no-img-element */
import Link from "next/link";




const RecentPosts = ({ blogsdata}) => {
//  const recent_post = recent_posts?.fields?.relatedBlogPosts

  return (
    <div className="recent-posts bg-light-gray " >
      <div className="blog-grid">
    <Link href={'/blogs'}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-60">
                <h4>Recent Posts</h4>
              </div>
            </div>
          </div>
          <div className="row">
          {blogsdata?.map((blog, idx) => (
                  <div className="col-lg-4 p-2" key={idx}>
                    <div className="item box-shadow mb-30" style={{ width: '80%' }}>
                      <div className="img">
                        <img
                          style={{ width: '100%' }}
                          src={blog?.fields?.thumbnail?.fields?.file?.url}
                          alt=""
                        />
                      </div>
                      <div className="cont" style={{ padding: '10px 0px 10px 10px' }}>
                        <div className="info">
                          <div className="author">
                            <span>{blog?.fields?.author}</span>
                          </div>
                          <div className="date">
                            <span>{blog?.fields?.date}</span>
                          </div>
                        </div>
                        <div className="title">
                          <h5>{blog?.fields?.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default RecentPosts;
