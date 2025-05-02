import React from 'react'
import LatestBooks from '../WebPageProduct/Latest';
import TrendingBooks from '../WebPageProduct/Trending';




function Home () {
 
  return (
    <div className="mt-[200px]">
      <div 
        className="flex justify-center w-full"
      >
        <img src='/assets/logo.png' alt="Logo" className='h-[700px] w-[1000px] '/>
      </div>
      
      <div className='w-[95%] ml-[5%] mt-[50px] '>
    
        <LatestBooks />
  
        <TrendingBooks />
      </div>
      
    </div>
  );
}

export default Home;
