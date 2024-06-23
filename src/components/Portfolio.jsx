/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';


const Portfolio = ({projects}) => {

  const sortedProjects = projects.sort((a, b) => {
    // Assuming the 'createdAt' field exists in the project object
    return new Date(b.date) - new Date(a.date);
  });

  // Get the most recent 3 projects
  const recentProjects = sortedProjects.slice(0, 3);

  return (
    <section className="portfolio-simp-crus section-padding pb-80" style={{backgroundColor:'white'}}>
      <div className="container">
        <div className="row mb-100">
          <div className="col-lg-6">
            <div className="simple-head md-mb10">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Portfolio</span>
              </h6>
              <h2 className="fz-40 fw-700">Our Recent Projects</h2>
             
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="text">
              {/* <p>The most widely sought for agency in branding nowadays we design brand, digital experience that engage the right customers.</p> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="work-crus">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                speed={1000}
                id="content-carousel-container-unq-3"
                className="swiper-container"
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  640: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 3
                  },
                }}
              >
                {
                  recentProjects.map((project, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <div className="img">
                          <img src={project.fields.coverImage.fields.file.url} alt="" />
                        </div>
                        <div className="info mt-20 text-center">
                          <h6 className="fw-600">
                            <Link href={'/portfolio/' + project.fields.slug}>
                             { project.fields.title }
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <div className='full-width d-flex justify-content-start mt-30' > 
                           
                           <div>
                               <Link href={'/portfolio/'} className="butn butn-md gr-purple2-bg text-light radius-30">
                             
                                   <span className="text slide-up">Browse Our Projects</span>
                                   <span className="text slide-down">Browse Our Projects</span>
                               
                               </Link>
                             </div>
                           </div>
 
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio