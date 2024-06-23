
  const ServiceHeader = ({service}) => {
    
        return (
          <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: `url(${service.fields.thumbnail.fields.file.url})` }}  data-overlay-dark="4">
          <div className="container" >
              <div className="row">
                <div className="col-lg-7 col-md-9">
                  <div className="cont mb-40">
                    <h2 >{service.fields.title}</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                
                <div className="col-lg-6">
                  <div className="item mt-30">
                    <h6>Introduction</h6>
                    <p>{service.fields.heading1}</p>
                  </div>
                </div>
               
                
                
              </div>
            </div>
          </section>
        )
      }
    
      export default ServiceHeader