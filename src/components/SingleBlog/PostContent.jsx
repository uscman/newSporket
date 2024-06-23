/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const PostContent = ({ blog }) => {
  const {title,author} = blog?.fields;
  return (
    <div className="col-lg-12">
      <div className="main-post md-mb0">
        <div className="item pb-60">
          <div className="cont">
            <div className="title">
              <h3 className="fw-800">{ title }</h3>
            </div>
            <div className="info flex mt-15">
              <div className="author mr-30 opacity-8 fz-14">
                <span>{ blog.fields.author }</span>
              </div>
              {/* <div className="tags mr-30 opacity-8 fz-14">
                <Link href="/blog-grid-clean" className="gat">{ post_meta.tags }</Link>
              </div> */}
              <div className="date fz-14">
                <span>{ blog.fields.date }</span>
              </div>
            </div>
            <div className=" mt-40 mb-40 radius-5" >
            <img src={ blog.fields.featuredImage.fields.file.url } style={{width:'100%', height:'500px'}} alt="" />
          </div>
          </div>
         
          <div className="text mb-20" >
          { documentToReactComponents(blog.fields.description)}
          </div>
          <div className="text">
            <p>However, Apple might not include it in the Air series when it launches it. As for
              the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a
              late 2023 release at best, according to the new claims.</p>
          </div>
          <div className="title mt-30">
            <h5 className="fw-600">What sizes do MacBook Airs come in?</h5>
          </div>
          <div className="text mt-20">
            <p>Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch
              version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple
              sold an 11-inch MacBook Air, but the company discontinued that model in 2017.
            </p>
          </div>

         

          <div className="mb-50 mt-50">
            <div className="row">
              {
                blog.fields.gallery.map ((blog)=>(

                  <div className="col-lg-6 col-md-6 col-sm-12" style={{marginTop:'20px'}}>
                  <div className="iner-img" style={{height:'90%'}}>
                    <img src={blog.fields.file.url} alt="" />
                  </div>
                </div>
                ))
             
                }       
            </div>
          </div>

          <div className="title mb-30">
            <h5 className="fw-600">Apple currently sells only one MacBook Air size.</h5>
          </div>

          <div className="text mb-20">
           {documentToReactComponents(blog.fields.description2)}
          </div>

         

          <div className="order-list mb-30">
            <h6 className="fw-600 mb-15">Ordered & Unordered Lists.</h6>
            <ul className="rest">
              <li><span>01 -</span> Yet this above sewed flirted opened ouch</li>
              <li><span>02 -</span> Goldfinch realistic sporadic ingenuous</li>
              <li><span>03 -</span> Abominable this abidin far successfully then like piquan
              </li>
            </ul>
          </div>

          <div className="text">
            <p>However, Apple might not include it in the Air series when it launches it. As for
              the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a
              late 2023 release at best, according to the new claims.</p>
          </div>
        </div>
        <div className="info-area flex mt-20 pb-20">
          
        
        </div>
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              {/* <div className="img">
                <img src={post_meta.author_image} alt="" className="circle-img" />
              </div> */}
            </div>
            <div className="cont valign">
              {/* <div className="full-width">
                <h6 className="fw-600 mb-10">{ post_meta.author }</h6>
                <p>{ post_meta.author_brief }</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
         
        </div>
      </div>
    </div>
  )
}

export default PostContent