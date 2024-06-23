import React from 'react'
import aboutImage from '../../public/img/about.svg'
import Link from 'next/link'
const About = () => {
  return (
    <section className="section-padding gr-purple-light-bg to-up position-re bord-thin-top" style={{backgroundColor:'white', paddingTop:'50px '}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="intro-img-shape full-width">
              <div className="svg-shape-img">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                  <defs>
                    <clipPath id="shape1">
                      <path d="M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z" fill="#d1d8e0"></path>
                    </clipPath>
                  </defs>
                  <image
        x="0"
        y="0"
        width="95%"
        height="100%"
        clipPath="url(#shape1)"
        href={aboutImage.src}  // Use the src property
        preserveAspectRatio="xMidYMid meet"
      />
                </svg>
                <div className="svg-sub-bg">
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                    <path d="M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z" fill="#f7f7f7"></path>
                  </svg>
                </div>
              </div>
              <div className="exp valign gr-blue2-bg">
                <div className="full-width">
                  <h2 className="fw-700">20</h2>
                  <span>Years Of <br /> Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">About Us</span>
              </div>
              <h3 className="mb-20 fz-38 fw-700">Our Journey: Inside Sprocket</h3>
              <p>
              At Sprocket Digital Solutions, we make your dreams come true through hard work and commitment. We are a full-service digital agency focused on creative design, digital marketing, web development, and consulting services—dedicated to empowering our clients to excel in the digital age.
              </p>
              <div className="flex mt-50">
                <div className="item flex full-width">
                  <div className="icon-flex mr-20">
                    <h3>320</h3>
                  </div>
                  <div className="cont-flex valign">
                    <div>
                      <span>Perfect <br /> Products</span>
                    </div>
                  </div>
                </div>
                <div className="item flex full-width">
                  <div className="icon-flex mr-20">
                    <h3>100%</h3>
                  </div>
                  <div className="cont-flex valign">
                    <div>
                      <span>Positive <br /> Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='full-width d-flex justify-content-end mt-30' > 
                           
              <div>
                  <Link href={'/about'} className="butn butn-md gr-purple2-bg text-light radius-30">
                
                      <span className="text slide-up">Read More</span>
                      <span className="text slide-down">Read More</span>
                  
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="wave-1 bottom bg-img" style={{ backgroundImage: "url('img/waves/wave-white2.svg')" }}></div>
    </section>
  )
}

export default About