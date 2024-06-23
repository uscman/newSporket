import 'react-slidedown/lib/slidedown.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ProjectIntro = ({project}) => {
console.log (project)

  
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="htit" >
              <h4> 
                {project.fields.heading1}
              </h4>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <div className="fz-18 fw-300">
              {documentToReactComponents(project.fields.description1)}
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectIntro