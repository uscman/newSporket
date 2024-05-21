
import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import Link from "next/link";
import accordionsData from '../data/accordions';

const Section = () => {
  const [accordions, setAccordions] = useState(accordionsData);

  const openAccordion = (e) => {
    document.querySelectorAll('.accordion.shadwo .item').forEach(accordion => accordion.classList.remove('active'))

    let item = e.target.closest('.item');
    item.classList.add('active');

    let newAccordions = accordions.map((accordion, idx) => {
      if (item.id.split('-')[1] == idx) accordion.closed = false;
      else accordion.closed = true;

      return accordion;
    });

    setAccordions(newAccordions);
  }

  return (
    <section className="section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content md-mb50">
              <div className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Highly expertise</span>
              </div>
              <h3 className="mb-20 fz-38 fw-700">Start building stunning websites with us.</h3>
              <p>
                Morbi sagittis hendrt nulla simply dummy text of the printing and typesetting has been the industry’s en diam ips elementum pretium hendrerit ultricies.
              </p>
              <Link href="/about-creative" className="butn butn-md gr-purple2-bg text-light radius-30 mt-40">
             
                  <span className="text slide-up">View More</span>
                  <span className="text slide-down">View More</span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <div className="accordion shadwo">
                <h5 className="mb-40 text-center fw-600">Do you have any question ?</h5>
                {
                  accordions.map((accordion, idx) => (
                    <div className={`item ${idx == 1 ? 'active':''} ${idx == accordion.length - 1 ? 'mb-0':''}`} id={`accordion-${idx}`} key={idx} onClick={openAccordion}>
                      <div>
                        <div className="title">
                          <h6 className="fz-13 text-u ls2 fw-600">{ accordion.title }</h6>
                          <span className="ico"></span>
                        </div>
                        <SlideDown className="accordion-info active" closed={accordion.closed}>
                          <p>{ accordion.details }</p>
                        </SlideDown>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-out left huge-shape opacity-4">
        <div className="svg-color">
          <svg x="0px" y="0px" viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg2">
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="1000%" style={{ stopColor: '#efebfd' }}></stop>
                <stop offset="0%" style={{ stopColor: 'transparent' }}></stop>
              </linearGradient>
            </defs>
            <path fill="url(#gradient2)" d="">
              <animate repeatCount="indefinite" attributeName="d" dur="20s"
                values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
            </path>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Section