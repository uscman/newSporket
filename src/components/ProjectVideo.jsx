import { useState, useEffect } from 'react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ProjectVideo = () => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  useEffect(() => {
    const parallaxie = (selector) => {
      let elementBg = document.querySelector(selector);
      if (!elementBg) return;

      let image = elementBg.getAttribute("data-background");
      let position = elementBg.getBoundingClientRect().top * 0.55;

      elementBg.style.backgroundImage = `url("${image}")`;
      elementBg.style.backgroundSize = 'cover';
      elementBg.style.backgroundRepeat = 'no-repeat';
      elementBg.style.backgroundAttachment = 'fixed';
      elementBg.style.backgroundPosition = `center ${position}px`;

      const handleScroll = () => {
        let elements = document.querySelectorAll('.parallaxie[data-background]');

        elements.forEach(element => {
          position = element.getBoundingClientRect().top * 0.55;
          element.style.backgroundPosition = `center ${position}px`;
        });
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    parallaxie('.parallaxie[data-background]');
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="video-wrapper section-padding bg-img parallaxie valign" data-background="img/portfolio/project2/bg1.jpg" data-overlay-dark="4">
          <div className="full-width text-center">
            <a className="vid" href="https://vimeo.com/127203262" onClick={openVideo}>
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="vimeo"
              autoplay
              isOpen={isOpen}
              videoId="127203262"
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default ProjectVideo;
