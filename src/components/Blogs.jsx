/* eslint-disable @next/next/no-img-element */
 import Link from 'next/link';


const Blog = ({ blogsdata }) => {

  return (
    <section style={{padding:'0px'}} className="blog-grid section-padding">
      <div className="container">
        <div className="row mb-100">
          <div className="col-md-7">
            <div className="simple-head">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Events and Blogs</span>
              </h6>
             
            </div>
          </div>
          <div className="col-md-5 justify-content-end valign">
            <div className="s-title valign ml-auto">
             
            </div>
          </div>
        </div>

        <div className="row" style={{marginBottom:"40px"}}>
          { blogsdata.map((blog, index) => (
              <div className="col-lg-4" key={index}>
                <div className="item box-shadow">
                  <div className="img">
                    <img style={{width:'80%'}} src={blog.fields.thumbnail.fields.file.url} alt="" />
                    <div className="tags">
                      <a href="#0">sporket</a>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">
                      <div className="author">
                        <span>{ blog.fields.author }</span>
                      </div>
                      <div className="date opacity-7">
                        <span>{ blog.fields.date }</span>
                      </div>
                    </div>
                    <div className="title">
                      <h5>
                        <Link href="/blog-post">
                        { blog.fields.title }
                        </Link>
                      </h5>
                    </div>
                    <Link className="butn butn-inline butn-gr mt-20 opacity-9" href={'blogs/' + blog.fields.slug}>
                      
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

export default Blog;