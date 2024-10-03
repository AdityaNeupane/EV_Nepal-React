 import React from 'react';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination, Autoplay } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 import './Display.css';

 import porsche from '../assets/display-images/porsche.png';
 import cyberster1 from '../assets/display-images/cyberster1.png';
 import avatr from '../assets/display-images/avatr.png';
 import jaecoo from '../assets/display-images/jaecoo.png';
 

 
const Display = () => {
  return (
 

    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
           autoplay={{
          delay: 3000, // Delay between slides in ms (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
      >
     
        <SwiperSlide> <img src={cyberster1} alt='cyberster'></img></SwiperSlide>
        <SwiperSlide><img src={porsche} alt='porsche'></img></SwiperSlide>
        <SwiperSlide><img src={avatr} alt='avatr'></img></SwiperSlide>
        <SwiperSlide><img src={jaecoo} alt='jaecoo'></img></SwiperSlide>
           
       
      
       
      </Swiper>
    </div>
  );
};

export default Display;

