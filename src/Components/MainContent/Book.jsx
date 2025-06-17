import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Functions/AddToCart";
import { allBooks } from "../Products/mangaProducts";
import { useParams } from "react-router-dom";
import imgNotFound from "/assets/img-notfound.jpg";
import StarRating from "../Products/starRating";
import Cart from "./Cart";
import { FaBarcode } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { GiWeight } from "react-icons/gi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiRefund2Fill } from "react-icons/ri";
import { FaTruckFast } from "react-icons/fa6";
import addToWList from "../Functions/addToWishlist";
import { cartProduct as initialCart } from '../Products/mangaProducts';
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { PiBooksBold } from "react-icons/pi";
import BookPhysicalDetails from "../WebPageProduct/Slider";



// for slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';






function Book({ onAddtoCart }) {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams()
  const [book, setBook] = useState({})
  const [cartAddedd, setCartAdded] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [cart, setCart] = useState(0)
  const [added, setAdded] = useState(false);
  useEffect(() => {
    const foundBook = allBooks.find((book) => book.id == id)
    if (foundBook) {
      setBook(foundBook)
    }
  }, [id])

  const handleAdd = () => {
    setAdded(true)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 2000);
  }

  const handleAddTocart = () => {
    if (!cartAddedd) {
      onAddtoCart?.() // ✅ call the function from props
      setCartAdded(true);
    }
  }





   var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    
  };

  return (
    <div className="ml-[20px] mt-[30px]">
      <div className="flex flex-col">
        {/* book details */}
        <div className="flex">

          <div>
            <img
              src={book.image}
              className="w-[300px] h-[450px] rounded-2xl object-cover border-1 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imgNotFound;
              }}
              alt={book.name}
            />
          </div>
          <div className="flex">
            <div
              className="flex flex-col ml-[30px] mt-[5px]"
            >
              <div
                className="flex flex-col gap-4">
                <div
                  className=" flex gap-2 items-baseline text-black"
                >

                  <span
                    className="text-3xl font-semibold text-orange-700"
                  >
                    {book.name}
                  </span>



                  <span
                    className="text-[18px] font-bold"
                  >
                    {`(${book.binding ? book.binding : "Paperback"})`}
                  </span>
                  <span
                    className="text-[18px] font-bold"
                  >
                    - {book.release ? book.release : "2025"}
                  </span>

                </div>

                <div className="flex">
                  <div
                    className="flex items-center gap-2 text-black"
                  >
                    <span
                      className="font-semibold text-[18px]"
                    >
                      By:
                    </span>

                    {/* Author */}
                    <span className="text-[18px] font-semibold text-blue-500 hover:underline">
                      {book.author}
                    </span>
                    <span className="text-[15px]">
                      (Author)
                    </span>
                    {book.illustrator &&
                      <div
                        className="flex items-center gap-2"
                      >
                        <span
                          className="text-[18px] font-semibold text-blue-500 hover:underline"
                        >
                          {book.illustrator}

                        </span>
                        <span
                          className="text-[16px] "
                        >
                          (illustrated)
                        </span>
                      </div>
                    }

                    {
                      book.publisher &&
                      <div
                        className="flex items-center gap-2"
                      >
                        <span
                          className="text-[18px] font-semibold text-blue-500 hover:underline"
                        >
                          {book.publisher}
                        </span>
                        <span
                          className="text-[16px] "
                        >
                          (Publisher)
                        </span>
                      </div>
                    }

                  </div>
                </div>

                <div
                  className="text-xl ml-[10px]"
                >
                  {book.rating != null && (
                    <StarRating rating={book.rating} />
                  )}
                </div>

                {/* MRP s */}
                <div
                  className="ml-[10px]"
                >
                  <div
                    className="flex text-3xl text-green-600 font-semibold font-mono">
                    ₹<span className="text-black">{book.price}</span>
                  </div>

                </div>

                {/* Stock */}
                <div
                  className="ml-[10px]"
                >
                  {book.stock > 0 ? (
                    <div
                      className="flex text-xl text-green-400"
                    >
                      Avilable
                    </div>
                  ) : (
                    <div
                      className="flex text-xl text-red-400"
                    >
                      Out of Stock
                    </div>
                  )}
                </div>

                {/* Book Descriptions */}
                <div className="max-w-[600px]">
                  <div className="flex flex-col gap-3 border-1 border-gray-600 rounded-2xl p-5">
                    <span
                      className="text-2xl font-semibold font-[italic] text-[#69385C]"
                    >
                      {book.headline ? book.headline : "Random Headline That i made myself"}
                    </span>
                    <p className="text-black text-xl font-[cursive]">
                      {book.description ? book.description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Earum facilis ipsa qui ad maxime nobis voluptatibus tempora quasi explicabo laudantium ratione fuga suscipit, veniam ipsum culpa enim aut eius beatae."}
                    </p>
                  </div>
                </div>

                
                
              </div>
            </div>
          </div>


          {/* buttons */}
          <div className='text-black flex items-center max-h-[300px] ml-[30px] mt-[100px]'>
            <div className="flex flex-col gap-2 border-2 border-gray-200 px-[30px] py-[20px] rounded-lg">


              <div>
                <div
                  className="w-[250px] border-1 border-gray-200 px-[20px] py-[5px] rounded-full bg-gray-100"
                >
                  <span
                    className="text-[14px] "
                  >
                    Quantity:
                  </span>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="ml-2 bgtransparent text-black w-[142px] outline-none"
                  >
                    {Array.from({ length: book.stock }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {!cartAddedd ? (
                <button className='flex justify-center bg-yellow-400 text-black text-[14px] font-semibold px-6 py-2  w-[250px] hover:bg-yellow-300 rounded-[30px]'
                  onClick={() => {
                    AddToCart({ ...book, quantity });     // 💥 pass book here!
                    handleAddTocart();     // 📦 update UI state
                  }}
                >
                  Add to cart
                </button>
              ) : (
                <span className='flex justify-center text-green-600 font-semibold py-2 text-sm  w-[250px]'>Added to cart</span>
              )}

              <Link className='flex justify-center  bg-orange-400 text-black text-[14px] font-semibold px-6 py-2 rounded-[30px]  w-[250px] hover:bg-orange-300'
                to={`/buy/${book.id}`}
              >
                Buy Now
              </Link>

              {/** 
                {!added && (
                  <button
                    className='flex justify-center bg-white text-black text-xl font-semibold px-6 py-2 rounded-md  w-[300px] hover:bg-gray-200'
                    onClick={()=>{
                      addToWList(book)
                      handleAdd()
                    }}
                  >
                    Add to Wishlist
                  </button>
                )}
                {showMessage && (
                  <span className="flex justify-center text-green-400 font-semibold text-sm  w-[300px]">
                    ✅ Added to wishlist!
                  </span>
                )}
              */}
            </div>



          </div>




        </div>






        {/* book physical details */}
        <div
          className=" text-black "
        >
          <div
            className="flex justify-center "
          >
            
            <BookPhysicalDetails   book={book}/>
            
            

          </div>
        </div>

        


        {/* website service quality */}
        <div className="flex justify-center gap-10 mt-5 ">
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <MdOutlineWorkspacePremium />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Premium quality
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <TbTruckReturn />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Easy returns
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <LiaCertificateSolid />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Certified product
            </span>
          </div>
          <div className="flex flex-col w-[120px]">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <RiRefund2Fill />
            </span>
            <span className="text-center text-blue-400 text-sm font-semibold">
              Money back gurantee
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex justify-center text-blue-400 text-3xl font-light">
              <FaTruckFast />
            </span>
            <span className="text-blue-400 text-sm font-semibold">
              Fast delivery
            </span>
          </div>
        </div>

        <div className="mt-10 px-6 py-4 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto border border-gray-300">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            About the Author
          </h2>
          <p className="text-md md:text-lg text-gray-700 leading-relaxed">
            {book.AboutAuthor}
          </p>
        </div>




      </div>
    </div>
  )
}
export default Book