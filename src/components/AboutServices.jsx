import services from '../data/aboutservices';
import Link from 'next/link';

const AboutServices = ({servicedata}) => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className='row'>
          <div className='col-lg-12'>
          <div className="simple-head text-center mb-80">
              <h4>Our Services</h4>
            </div></div>
           </div>
        <div className="row">
          {
            servicedata.map((service, index) => (
              <div className="col-lg-6" key={index}>
                <div className="item-box flex bg-gray-light mb-30">
                  <div>
                  <div className="icon-bord-shad revers ">
                  <img  className="circular-image hovereffect" src={service.fields.icon.fields.file.url} alt={service.fields.title}   />
                    </div>
                  </div>
                  <div className="cont ml-30">
               <Link href={'/services/' + service.fields.slug}>     <h6 className="mb-10 fw-600">{ service.fields.title }</h6> </Link>
                    <p>{service.fields.heading1}</p>  
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

export default AboutServices