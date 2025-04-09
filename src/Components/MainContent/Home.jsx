import React from 'react'
import LatestBooks from '../WebPageProduct/Latest';
import TrendingBooks from '../WebPageProduct/Trending';



function Home () {
 
  return (
    <div className="ml-[175px] absolute top-0 w-[85%] mt-[70px]">
      <img src='../../src/assets/logo.png' alt="Logo" className='h-[500px] w-full '/>

      <LatestBooks />
      <TrendingBooks />
    </div>
  );
}

export default Home;
