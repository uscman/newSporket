/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from '../data/aboutblogs';

const AboutBlogs = () => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="simple-head text-center mb-80">
              <h6>Latest News</h6>
              <h4>Our Latest Insides</h4>
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs.map((blog, index) => (
              <div className="col-lg-4" key={index}>
                <div className="item box-shadow">
                  <div className="img">
                    <img src={blog.poster} alt="" />
                    <div className="tags">
                      <a href="#0">{ blog.tag }</a>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">
                      <div className="author">
                        <span>{ blog.author }</span>
                      </div>
                      <div className="date opacity-7">
                        <span>{ blog.date }</span>
                      </div>
                    </div>
                    <div className="title">
                      <h5>
                        <Link href="/blog-post">
                        { blog.title }
                        </Link>
                      </h5>
                    </div>
                    <Link className="butn butn-inline butn-gr mt-20 opacity-9" href="/blog-post">
                      
                        <span className="text">Continue Reading</span>
                        <span className="underline-gr aqua-bg"></span>
                    
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutBlogs;