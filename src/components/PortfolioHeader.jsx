
const PortfolioHeader = ({ title, subTitle }) => {
    return (
      <header className="pg-header-sipm pg-work gr-purple-light-bg valign" style={{backgroundImage: `url(/img/coverblog.jpeg)`, 
      backgroundSize: 'cover', // Use contain to fit the entire image
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="caption text-center">
                <span className="fz-16 mb-10 gr-purple-red-text" style={{color:'white'}}>{ subTitle }</span>
                <h1 className="fz-60" style={{color:'white'}}>{ title }</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default PortfolioHeader