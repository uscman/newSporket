
const AboutHeader = ({ title }) => {
  return (
  
  <header className="pg-header-sipm gr-purple-light-bg to-up valign "  style={{backgroundImage: `url(/img/coverblog.jpeg)`, 
  backgroundSize: 'cover', // Use contain to fit the entire image
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height:'400px'
  }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="caption text-center">
              <h1 className="fz-60" style={{color:'white'}}>{ title }</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AboutHeader;