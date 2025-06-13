import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight, FaBarcode } from 'react-icons/fa';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2';
import { GiWeight } from 'react-icons/gi';
import { LiaGlobeAmericasSolid } from 'react-icons/lia';
import { PiBooksBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";





const NextArrow = ({ onClick }) => (
  <div
    className="absolute text-5xl  -right-15 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 text-black rounded-full"
    onClick={onClick}
  >
    <MdOutlineNavigateNext />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute text-5xl -left-15 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 text-black rounded-full"
    onClick={onClick}
  >
    <GrFormPrevious />
  </div>
);

function BookPhysicalDetails({ book }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='w-full max-w-[900px] mx-auto  border-t-2 border-b-2 border-gray-400 px-[60px] py-[20px] mt-[50px]'>
      <Slider {...settings}>
        {book.series && (
          <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
            <span>Part of Series</span>
            <span className="text-3xl"><PiBooksBold /></span>
            <Link to={`/series/${book.series}`} className="font-semibold hover:text-blue-600 hover:underline">{book.series}</Link>
          </div>
        )}
        <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
          <span>ISBN-10</span>
          <span className="text-3xl"><FaBarcode /></span>
          <span className="font-semibold">{book.isbn10 || "1234567891011"}</span>
        </div>

        <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
          <span>ISBN-13</span>
          <span className="text-3xl"><FaBarcode /></span>
          <span className="font-semibold">{book.isbn13 || "1234567891011"}</span>
        </div>

        <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
          <span>Pages</span>
          <span className="text-3xl"><HiOutlineDocumentDuplicate /></span>
          <span className="font-semibold">{book.pages || "-"}</span>
        </div>

        <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
          <span>Weight</span>
          <span className="text-3xl"><GiWeight /></span>
          <span className="font-semibold">{book.weight || "-"}</span>
        </div>

        <div className="w-[200px] flex flex-col items-center gap-3 p-4 bg-white rounded-lg shadow border border-gray-300 ">
          <span>Language</span>
          <span className="text-3xl"><LiaGlobeAmericasSolid /></span>
          <span className="font-semibold">{book.language || "English"}</span>
        </div>

        
      </Slider>
    </div>
  );
}

export default BookPhysicalDetails;
