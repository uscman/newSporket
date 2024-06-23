import SimpleParallax from 'simple-parallax-js';

const thumparallaxUp = () => {
  let imageUp = document.getElementsByClassName("thumparallax");
  if (imageUp) {
    new SimpleParallax(imageUp, {
      delay: 1,
      scale: 1.1,
    });
  }
};

export default thumparallaxUp;
