import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import clients from '../data/clients';

const AboutClients = ({ pt }) => {
  return (
    <section className="clients-carousel section-padding pt-60" >
      <div className="container">
        <div className="line-head">
          <h5>Happy Clients</h5>
        </div>
        <Swiper
          id="content-carousel-container-unq-4" 
          className="swiper-container"
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 5
            }
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="img">
                  <Link href="/">
                  <img src={client.image} alt="" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutClients;
