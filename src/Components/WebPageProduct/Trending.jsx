import React from 'react'
import { trendingBooks } from '../Products/mangaProducts';
import { CardType1 } from '../ProductCard/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black text-white rounded-full hover:bg-gray-800"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-[50px] top-1/3 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-black text-white rounded-full hover:bg-gray-800"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

function TrendingBooks() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className=' mt-[40px]'>
        <p className='text-black text-2xl font-bold p-4 mb-3'>Trending Books</p>
        <Slider {...settings} >  
          
          {trendingBooks.map((book, index) => (
            <CardType1 key={book.id || index} book={book} index={index} />
          ))}
        
        </Slider>
      </div>
  )
}


export default TrendingBooks