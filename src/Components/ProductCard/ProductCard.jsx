import React, { Component, useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import StarRating from '../Products/starRating';
import { latestBooks } from '../Products/mangaProducts';
import { Link } from 'react-router-dom';
import AddToCart from '../Functions/AddToCart';
import imgNotFound from "/assets/img-notfound.jpg";
import addToWList from '../Functions/addToWishlist';



function CardType1({book, index}) {
  

  return (
    <Link to={`/book/${book.id}`} className="no-underline">
      <div className='max-w-[170px] h-full  px-[10px] py-[10px] ' >
        {/* Book Image */}
        <div className='flex justify-center border-1 border-white'>
         
          <img 
            src={book.image} 
            className='w-[150px] h-[170px]' 
            alt={book.name} 
            onError={(e) => { e.target.onerror = null; e.target.src = imgNotFound; }}
          /> 
         
        </div>

        {/* Book Details */}
        <div className='flex flex-col text-gray-300 gap-1 font-bold'>

          {/* Centered and Wrapped Book Name */}
          <div className=' text-center'>
            {book.name}
          </div>

          {/* Author Name */}
          <span className='flex justify-center'>{book.author}</span>

          {/* Star Rating */}
          <span className='flex justify-center mt-2'>
            <StarRating rating={book.rating} />
          </span>

          {/* Price */}
          <div className='flex items-center justify-center'>
            <span className='text-green-500 text-[28px]'>₹</span>
            <p className='text-white text-[20px]'>{book.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CardType2({book, index, onAddtoCart}) {
  
  
  const [added, setAdded] = useState(false);
  const [showMessage, setShowMessage] = useState(false) 
  const [cart, setCart] = useState(0)
  const [cartAddedd, setCartAdded] = useState(false);


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
  


  return (
    <div className='border-1 border-t-gray-400  flex flex-row py-6 pl-6' >

      <Link to={`/book/${book.id}`}>
        {/* Book Image */}
        <div>
          <img src={book.image} className='w-[200px] h-[300px] rounded-2xl' 
            onError={(e) => { e.target.onerror = null; e.target.src = imgNotFound; }}
          />
        </div>
      </Link>


      {/* Book Details */}
      <div className='flex flex-col text-white ml-10 mt-6 border-r w-[400px]'>

        <Link to={`/book/${book.id}`} className="mb-6">
          {/* Book Name */}
          <span className='text-2xl text-[#7eb7ad] font-black w-[350px]  hover:underline'>
            {book.name}
          </span>
        </Link>
        {/* Author Name */}
        <span className='flex items-baseline font-semibold'>
          By: <p className='text-[18px] text-cyan-200 font-bold px-[10px]'>
            {book.author}
          </p>
        </span>

        {/* Publisher Name */}
        <span className='flex items-baseline font-semibold'>
          Publisher: <p className='text-[18px] text-cyan-200 font-bold px-[10px]'>
            {book.publisher}
          </p>
        </span>

        <div className='flex mt-8'>

          <div className='border-r-1 w-[170px]'>

            {/* Rating in Stars */}
            <span className='text-xl '>
              <StarRating rating={book.rating} />
            </span>

            {/* Price */}
            <span className='flex items-baseline font-semibold text-[26px] text-green-400 mt-2'>
              ₹
              <p className='text-white text-[26px] ml-2'>
                {book.price}
              </p>
            </span>

          </div>
          <div className=''>
            <span className='flex ml-5 font-semibold'>Binding:<p className='ml-1.5 text-blue-300 hover:underline cursor-pointer'>{book.binding ? book.binding : "Paperback"}</p></span>
            <span className='flex ml-5 font-semibold'>Release:<p className='ml-1.5 text-blue-300 hover:underline cursor-pointer'>{book.releaseDate ? book.releaseDate : "Not Available"}</p></span>
            <span className='flex ml-5 font-semibold'>Language:<p className='ml-1.5 text-blue-300 hover:underline cursor-pointer'>{book.language ? book.language : "English"}</p></span>
          </div>

        </div>

      </div>

      {/* Buttons */}
      <div className='text-white flex flex-col justify-center gap-2 ml-4'>
        <Link className='text-center bg-green-700 text-xl font-semibold px-6 py-2 rounded-md hover:bg-green-600'
          to={`/buy/${book.id}`}
        >
          Buy Now
        </Link>

        {!cartAddedd ? (
          <button className='bg-yellow-500 text-xl font-semibold px-6 py-2 hover:bg-yellow-400 rounded-md'
            onClick={() => {
              AddToCart(book);     // 💥 pass book here!
              handleAddTocart();     // 📦 update UI state
            }}
          >
            Add to cart
          </button>
        ):(
          <span className='text-green-400 text-center font-semibold py-2 text-sm'>Added to cart</span>
        )}

        

        {!added && (
          <button 
            className='bg-white text-black text-xl font-semibold px-6 py-2 rounded-md hover:bg-gray-200'
            onClick={()=>{
              addToWList(book)
              handleAdd()
            }}
          >
            Add to Wishlist
          </button>
        )}
        {showMessage && (
          <span className="text-green-400 text-center font-semibold text-sm">
            ✅ Added to wishlist!
          </span>
        )}

        

      </div>

    </div>
  )
}





export { CardType1, CardType2 }