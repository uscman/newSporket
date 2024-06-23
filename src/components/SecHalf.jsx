import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../data/accordions';

const SecHalf = () => {
  const [accordions, setAccordions] = useState(accordionsData);

  const openAccordion = (e) => {
    document.querySelectorAll('.accordion .item').forEach(accordion => accordion.classList.remove('active'))

    let item = e.target.closest('.item');
    item.classList.add('active');

    let newAccordions = accordions.map((accordion, idx) => {
      if (item.id.split('-')[1] == idx) accordion.closed = false;
      else accordion.closed = true;

      return accordion;
    });

    setAccordions(newAccordions);
  }

  return (
    <section className="sec-half position-re">
      <div className="bg-img" style={{ backgroundImage: "url('img/background/25.jpeg')" }} data-overlay-dark="2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-7">
            <div className="content">
              <span className="sub-title">Our Vision</span>
              <h3 className="mb-20 fz-45 fw-700 main-color">Empowering Digital Transformation


</h3>
              <p>To transform businesses into captivating digital galaxies with innovative design, marketing, and web development, empowering them to thrive online.</p>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecHalf