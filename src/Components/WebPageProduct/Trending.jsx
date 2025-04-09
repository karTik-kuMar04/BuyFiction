import React from 'react'
import { trendingBooks } from '../Products/mangaProducts';
import { CardType1 } from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function TrendingBooks() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className='border-1 border-t-gray-400 mt-[40px]'>
        <p className='text-white text-2xl font-bold p-4 mb-3'>Latest Books</p>
        <Slider {...settings} >  
          
          {trendingBooks.map((book, index) => (
            <CardType1 key={book.id || index} book={book} index={index} />
          ))}
        
        </Slider>
      </div>
  )
}


export default TrendingBooks