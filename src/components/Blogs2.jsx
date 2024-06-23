/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Blogs2 = ({ grblue,blogsdata }) => {
  return (
    <section style={{padding:'0px', marginTop:'80px'}} className="blog-grid section-padding ">
      <div className="container ">
        <div className="row mb-100">
          <div className="col-md-7">
            <div className="simple-head">
              <h6 className="sub-head radius mb-20" style={{backgroundColor:'#b3b2af'}}>
                <span className="fz-12 ls2 text-u">articles</span>
              </h6>
              <div>
                <h2 className={`fz-40 ${grblue ? 'fw-700':'fw-800 gr-purple-red-text inline'}`}>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="col-md-5 justify-content-end valign">
            <div className="s-title valign ml-auto">
             
            </div>
          </div>
        </div>

        <div className="row">
          {
            blogsdata.map((blog, idx) => (
              <div className="col-lg-4" key={idx}>
                <Link href={'/blogs/' + blog?.fields.slug}>
              <div className="item box-shadow mb-30">
                <div className="img">
                  <img style={{width:'100%'}} src={blog?.fields.thumbnail.fields.file.url} alt="" />
                 
                </div> 
                <div className="cont">
                  <div className="info">
                    <div className="author">
                      <span>{ blog?.fields.author }</span>
                    </div>
                    <div className="date">
                      <span>{ blog?.fields.date }</span>
                    </div>
                  </div>
                  <div className="title">
                    <h5>{ blog?.fields.title }</h5>
                  </div>
                </div>
               
              </div>
              </Link>
            </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blogs2;