import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function EventSlider({ project }) {
  const [openIndex, setOpenIndex] = useState(null);

  const openLightbox = (index) => {
    setOpenIndex(index);
  };

  const closeLightbox = () => {
    setOpenIndex(null);
  };

  console.log('sdgsddf')
  console.log(project)
  return (
    <>
      <Carousel
      showArrows={false} 
      showThumbs={false} 
      showStatus={false} 
      centerMode={true} 
      centerSlidePercentage={33.33}
      infiniteLoop
      autoPlay={true}
      interval={2000}
      > 
        {   
          project.fields.gallery.map((image, index) => (
              <div className="mb-4 gap-4" style={{width:'100%', display:'inline-block' }}>
                <div
                  className="position-relative cursor-pointer m-3"
                  onClick={() => openLightbox(index)} >
                  <img alt="" src={image.fields.file.url} />
                </div>
              </div>
          ))
        }
      </Carousel>
      <Lightbox
        open={openIndex !== null}
        close={closeLightbox}
        slides={project.fields.gallery.map((image) => ({
        src: image.fields.file.url,
        width: 1600, // Add desired width
        height: 900, // Add desired height
    
        }))}
        plugins={[Zoom]}
        index={openIndex}
      />
    </>
  );
};
