const BlogHeader = () => {
    return (
      <header className="pg-header-sipm gr-purple-light-bg valign mb-30" style={{backgroundImage: `url(/img/coverblog.jpeg)`, 
      backgroundSize: 'cover', // Use contain to fit the entire image
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height:'500px'
    
       }}>
        <div className="container mt-100">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="caption text-center">
                <span className="fz-14 mb-10 text-u ls4 gr-purple-red-text">Articles & Blog</span>
                <h1  className="fz-50 fw-600" style={{color:'white'}}>Articles and Events</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default BlogHeader