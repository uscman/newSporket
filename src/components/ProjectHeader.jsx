
  const ProjectHeader = ({project}) => {

    return (
      <section className="works-header bg-img parallaxie d-flex align-items-end" style={{ backgroundImage: `url(${project.fields.coverImage.fields.file.url})` }} data-overlay-dark="4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont mb-40">
                <h2 style={{color:'green'}}>my name is hammad</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Client</h6>
                <p>{ project.fields.client }</p>
              </div>
            </div> 
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Date</h6>
                <p>{ project.fields.date }</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item mt-30">
                <h6>Status</h6>
                <p>{ project.fields.status }</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    )
  }

  export default ProjectHeader