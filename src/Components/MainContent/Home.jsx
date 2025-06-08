
import LatestBooks from '../WebPageProduct/Latest';
import TrendingBooks from '../WebPageProduct/Trending';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





function Home () {
 
  return (
    <div className="mt-[20px]">
      
      <div 
        className='flex justify-center'
      >
        <img className="w-[90%] h-[600px] object-contain" src="/assets/bookquote.png" alt="" />
      </div>
      
      <div className='w-[95%] ml-[5%] mt-[50px] '>
    
        <LatestBooks />
  
        <TrendingBooks />
      </div>
      
    </div>
  );
}

export default Home;
