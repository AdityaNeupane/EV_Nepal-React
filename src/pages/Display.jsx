import React from 'react';
import './Display.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import porschetaycan4s from '../assets/display-images/porschetaycan4s.png';
import mgcyberster from '../assets/display-images/mgcyberster.png';
import hyperht from '../assets/display-images/hyperht.png';
import avatr11 from '../assets/display-images/avatr11.png';
import jaecooj6 from '../assets/display-images/jaecooj6.png';
import punchev from '../assets/display-images/punchev.png';
const Display = () => {

  const settings = {
    dots: true,          // Show dots for navigation
    infinite: true,      // Infinite loop
    speed: 800,          // Transition speed
    slidesToShow: 1,     // Show one slide at a time
    slidesToScroll: 1,   // Scroll one slide at a time
    autoplay: true,      // Auto-slide
    autoplaySpeed: 2000, // 1 seconds per slide
  
  };

  return (
   <>
   <div className="display">
    <h1 className="display-heading"> New Electric Vehicle Entries in the Nepalese Market</h1>
   
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={porschetaycan4s} alt="Image A" className='slider-image' />
        </div>
        <div>
          <img src={mgcyberster} alt="Image B" className='slider-image' />
        </div>
        <div>
          <img src={hyperht} alt="Image C" className='slider-image' />
        </div>
        <div>
          <img src={avatr11} alt="Image D" className='slider-image' />
        </div>
        <div>
          <img src={jaecooj6} alt="Image E" className='slider-image' />
        </div>
        <div>
          <img src={punchev} alt="Image F" className='slider-image' />
        </div>
      </Slider>
    </div>
   
   </div>
   </>
  );
};

export default Display;
