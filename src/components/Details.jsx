/* eslint-disable @next/next/no-img-element */
import details from '../data/details';
import EventSlider from './EventSlider';

const Details = ({project}) => {

  return (
    <section className="projdtal section-padding">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-80">
              <h6 className="sub-title gr-purple-red-text inline">{ details.subtitle }</h6>
              <h4>{ project.fields.heading1 }</h4>
            </div>
          </div>
        </div>
        <div className="row">

          <EventSlider project={project}/>
          {/* {
            project.fields.gallery.map((image, idx) => (
              <div className="col-md-4" key={idx}>
                <div>
                  <img alt="" src={image.fields.file.url} />
                </div>
              </div>
            ))
          } */}
        </div>
      </div>
    </section>
  )
}

export default Details