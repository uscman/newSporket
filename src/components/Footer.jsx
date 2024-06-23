/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import Link from 'next/link';
import footerData from '../data/footer';

const Footer = ({ footerClass, type }) => {
  useEffect(() => {
    let bgImg = document.querySelector('footer .full-over.bg-img');
    bgImg.style.backgroundImage = `url(${bgImg.getAttribute('data-background')})`;
  }, []);

  return (
    <footer className={footerClass} style={{backgroundColor:'#DBDEFE', marginTop:'120px'}}  >
      <div className={`container ${type == 'purple-light' ? 'mb-40 to-up':''}`} >
        <div
          className={`call-action-banner pt-60 pb-60 position-re radius-30 ${type == 'purple-light' ? 'gr-blue2-bg':'mb-100'} ${type == 'purple-red' ? 'gr-purple-red-bg':''}`} 
          data-overlay-dark="0"
          style={{backgroundColor:'grey'}}
        >
          <div className="row position-re ontop" >
            <div className="col-lg-7">
              <div className="text">
                <h6 className="sub-title fw-400">Already interested!</h6>
                <h4 className="fw-800">Don&lsquo;t wait and start now !</h4>
                <p className="text-light">Tell us which describes you, and we&lsquo;ll get in touch with next steps.</p>
              </div>
            </div>
            <div className="col-lg-5 valign">
              <div className="call-button full-width d-flex justify-content-end">
                <a href="#0" className="butn butn-md bg-light radius-30">
                  <span className="text text-dark slide-up">Get Started</span>
                  <span className="text text-dark slide-down">Get Started</span>
                </a>
              </div>
            </div>
          </div>
          <div className="full-over bg-img opacity-3 radius-30" data-background="img/patterns/call-action.png"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="clumn">
              <div className="logo mb-30">
                <a href="landing-preview.html">
                  <img src="img/logo-dark.png" alt="" />
                </a>
              </div>
              <div className="text">
                <p>We convert your business jewels into digital galaxies, integrating unique functionalities for performance. Our website-building services will give you a unique online presence. </p>
              </div>
              <div className="social circle-bord mt-30">
                <ul className="rest horizontal-link">
                  <li>
                    <a href={footerData.social_links.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a href={footerData.social_links.twitter} className="ms-2"><i className="fab fa-twitter"></i></a>
                    <a href={footerData.social_links.youtube} className="ms-2"><i className="fab fa-linkedin"></i></a>
                    <a href={footerData.social_links.facebook}><i className="fab fa-instagram"></i></a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="clumn">
              <h6 className="title fw-700 mb-30">Contact Us</h6>
              <ul className="address rest">
                <li className="adrs mb-15">Floor 3, Fortune Plaza, G 7/2, Blue Area, Islamabad, Pakistan.</li>
                <li className="eml underline mb-15">
                  <a href="#0">info@thesprocketmedia.com </a>
                </li>
                <li className="tel">
                  <h6 className={`${type == 'purple-red' ? 'gr-purple-red-text':''} ${type == 'purple-light' ? 'gr-blue2-text':''}`}>+1 917 388 3899</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="clumn">
              <h6 className="title fw-700 mb-30">Instagram</h6>
              <ul className="insta flex mb-20 rest">
                {
                  footerData.instagram_posts.map((post, idx) => (
                    idx < 3 && (
                      <li className={`${idx !== 2 ? 'mr-20':''} full-width`} key={idx}>
                        <a href={post.url}><img src={post.image} alt="" /></a>
                      </li>
                    )
                  ))
                }
              </ul>
              <ul className="insta flex rest">
                {
                  footerData.instagram_posts.map((post, idx) => (
                    idx >= 3 && (
                      <li className={`${idx !== 5 ? 'mr-20':''} full-width`} key={idx}>
                        <a href={post.url}><img src={post.image} alt="" /></a>
                      </li>
                    )
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer pt-30 mt-10" style={{backgroundColor:'#d1d8e0'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                <ul className="rest">
                  <li className="mr-30">
                    <Link href="/services-business">
                 Privacy policy
                    </Link>
                  </li>
                 
                  <li>
                    <Link href="/services-business">
                    Terms of service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">
                  All Rights Reserved by Sprocket 
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer