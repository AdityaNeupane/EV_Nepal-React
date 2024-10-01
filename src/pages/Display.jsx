 import React from 'react';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import './Display.css';

 import needleunderline3 from '../assets/underlines/needleunderline3.png';

import porsche1 from '../assets/display-images/porsche1.png';
import porsche2 from '../assets/display-images/porsche2.png';
import porsche3 from '../assets/display-images/porsche3.jpg';
import cyberster1 from '../assets/display-images/cyberster1.jpg';
import cyberster2 from '../assets/display-images/cyberster2.png';
import cyberster3 from '../assets/display-images/cyberster3.png';
import bydsealion1 from '../assets/display-images/bydsealion1.jpg';
import bydsealion2 from '../assets/display-images/bydsealion2.jpg';
import jaecoo1 from '../assets/display-images/jaecoo1.jpg';
 import avatr4 from '../assets/display-images/avatr4.jpg';
 import avatr5 from '../assets/display-images/avatr5.jpg';
 import punch1 from '../assets/display-images/punch1.png';
 import punch2 from '../assets/display-images/punch2.png';
 import punch3 from '../assets/display-images/punch3.jpg';
const Display = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
      >
     
        <SwiperSlide>
           
        <div className="image-container-cyberster">
        <img src={cyberster1} alt="Cyberster1" />
         <h1 className='display-heading-cyberster effect3d'>एमजी साइबरस्टर |</h1>
         <h1 className='display-heading2-cyberster  '>The most awaited machine <br></br>is finally in Nepal</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container-porsche">
          <img src={porsche3} alt="porsche 3" />
          <h1 className='display-heading-porsche effect3d'>पोरशे टायकन फोर एस !</h1>
          <h1 className='display-heading2-porsche effect3d '>The one and only in Nepal - Porsche Taycan 4s </h1>
          </div></SwiperSlide>
        <SwiperSlide><img src={cyberster2} alt="Cyberster 2" /></SwiperSlide>
        <SwiperSlide><img src={cyberster3} alt="Cyberster 3" /></SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Display;

