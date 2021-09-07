import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageOne from '../images/1.jpg';
import ImageTwo from '../images/2.jpg';
import ImageThree from '../images/3.jpg';
import ImageFour from '../images/4.jpg';
import ImageFive from '../images/11.jpg';
import ImageSix from '../images/12.jpg';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import '../../App.css';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function App() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageFour} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageFive} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: '300px' }} src={ImageSix} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
