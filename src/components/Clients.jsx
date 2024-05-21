/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import brands from '../data/clients';

export default function Clients({ slides }) {
  return (
    <section className="clients-carsouel shad up">
      <div className="container radius-15">
        <div className="row">
          <div className="col-sm-2 sm-hide">
            <div className="item flex">
              <div className="icon-flex mr-20">
                <h2 className="fz-40">30 <span>K</span></h2>
              </div>
              <div className="cont-flex valign">
                <div>
                  <span className="text-left fz-13 fw-500">Happy <br /> Customers</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 valign">
            
              {
                brands.map((brand, idx) => (
                  
                    <div className="item" style={{marginRight:'20px'}}>
                      <div className="img">
                        <img src={brand.image} alt="" />
                       
                      </div>
                    </div>
                 
                ))
              }
          </div>
        </div>
      </div>
    </section>
  )
}

