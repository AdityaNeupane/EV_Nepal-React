 import React from 'react';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

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
        {/* <SwiperSlide><img src={porsche1} alt="Porsche 1" /> </SwiperSlide> */}
        {/* <SwiperSlide><img src={porsche2} alt="Porsche 2" /></SwiperSlide> */}
        {/* <SwiperSlide> <img src={porsche3} alt="Porsche 3" /></SwiperSlide> */}
        <SwiperSlide><img src={cyberster1} alt="Cyberster 1" /></SwiperSlide>
        <SwiperSlide><img src={porsche3} alt="porsche 3" /></SwiperSlide>
        <SwiperSlide><img src={cyberster2} alt="Cyberster 2" /></SwiperSlide>
        <SwiperSlide><img src={cyberster3} alt="Cyberster 3" /></SwiperSlide>
        {/* <SwiperSlide><img src={bydsealion1} alt="bydsealion1" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={bydsealion2} alt="bydsealion2" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={jaecoo1} alt="jaecoo1" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={avatr4} alt="avatr4" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={avatr5} alt="avatr5" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={punch1} alt="punch1" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={punch2} alt="punch2" /></SwiperSlide> */}
        {/* <SwiperSlide><img src={punch3} alt="punch3" /></SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Display;

