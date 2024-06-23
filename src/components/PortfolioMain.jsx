/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
// import blogs from '../data/blog.json';
// import { createClient } from 'contentful';

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID ,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   }) 

//   const res = await client.getEntries({content_type:'blog'})

//   return {
//     props: {
//       blogsdata: res.items
//     }
//   }
// }
const PortfolioMain = ({ projects }) => {

  return (
    <section style={{padding:'0px'}} className="blog-grid section-padding">
      <div className="container">
        <div className="row mb-100">
         
          <div className="col-md-5 justify-content-end valign">
            <div className="s-title valign ml-auto">
             
            </div>
          </div>
        </div>

        <div className="row" style={{marginBottom:"40px"}}>
          { projects.map((project, index) => (
              <div className="col-lg-4 pb-30" key={index} >
                <div className="item box-shadow">
                  <div className="img">
                    <Link href={"/portfolio/" + project.fields.slug}> 
                    <img style={{width:'100%'}} src={project.fields.coverImage.fields.file.url} alt="" />
                   </Link>
                  </div>
                  <div className="cont">
                    <div className="info">
                      
                      <div className="date opacity-7">
                        <span>{ project.fields.date }</span>
                      </div>  
                    </div>
                    <div className="title">
                      <h5>
                        <Link href={"/portfolio/" + project.fields.slug} >
                        { project.fields.title }
                        </Link>
                      </h5>
                    </div>
                   
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

export default PortfolioMain;