import statsData from '../data/stats';
import Link from 'next/link';
const Stats = () => {
  return (
    <section className="numb-states section-padding" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h3 className="fz-45 fw-700">Quality and reliability built into everything we do.</h3>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 no-padding">
            <div className="row">
              <div className="col-md-6">
                <div className="item sm-mb50">
                  <h3 className="mb-10 fw-200">{ statsData.first.number }</h3>
                  <h6 className="mb-10 fw-600">{ statsData.first.title }</h6>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <h3 className="mb-10 fw-200">{ statsData.second.number }</h3>
                  <h6 className="mb-10 fw-600">{ statsData.second.title }</h6>
                </div>
              </div>
              
            </div>
            <div className='full-width d-flex justify-content-start mt-30' > 
                           
                           <div>
                               <Link href={'/contact'} className="butn butn-md gr-purple2-bg text-light radius-30">
                             
                                   <span className="text slide-up">Contact Us</span>
                                   <span className="text slide-down">Contact Us</span>
                               
                               </Link>
                             </div>
                           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats