import React, { Component, useState } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import StarRating from '../Products/starRating';
import { latestBooks } from '../Products/mangaProducts';
import { Link } from 'react-router-dom';
import AddToCart from '../Functions/AddToCart';
import imgNotFound from "/assets/img-notfound.jpg";
import addToWList from '../Functions/addToWishlist';
import Toast from '../MainContent/Toast';



function CardType1({ book, index }) {
  return (
    <Link to={`/book/${book.id}`} className="no-underline">
      <div className="w-[220px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-2 border-gray-200 hover:border-blue-300">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-xl bg-gray-100">
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-[280px] object-cover rounded-t-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imgNotFound;
            }}
          />
        </div>

        {/* Details */}
        <div className="flex flex-col p-4 text-black">
          {/* Book Title */}
          <h3 className="text-base font-bold text-[#333] line-clamp-2 h-[48px] hover:underline">
            {book.name}
          </h3>

          {/* Author */}
          <p className="text-sm text-black font-medium mt-1 truncate">
            By : <span className='text-blue-600 hover:underline font-mono'>{book.author || 'Unknown'}</span> 
          </p>

          {/* Rating */}
          <div className="mt-2">
            <StarRating rating={book.rating} />
          </div>

          {/* Price */}
          <div className="mt-3 text-lg font-semibold text-green-600">
            ₹{book.price}
          </div>
        </div>
      </div>
    </Link>
  );
}


function CardType2({ book }) {
  const [showToastCart, setShowToastCart] = useState(false);
  const [showToastWish, setShowToastWish] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState(false);

  const handleAddToCart = () => {
    AddToCart(book);
    setAddedToCart(true);
    setShowToastCart(true);
  };

  const handleAddToWishlist = () => {
    addToWList(book);
    setWishlistMessage(true);
    setTimeout(() => setWishlistMessage(false), 2000);
    setShowToastWish(true);

  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md border rounded-xl p-4 mb-6 transition hover:shadow-lg gap-10">
      {/* Image */}
      <Link to={`/book/${book.id}`}>
        <img
          src={book.image}
          alt={book.name}
          className="w-[120px] h-[180px] rounded-md object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgNotFound;
          }}
        />
      </Link>

      {/* Details */}
      <div className="flex-1 md:ml-6 mt-4 md:mt-0 text-black">
        <Link to={`/book/${book.id}`}>
          <h2 className="text-lg md:text-xl font-bold hover:underline hover:text-gray-500">{book.name}</h2>
        </Link>
        <p className="text-sm text-gray-600 mt-1 ">
          By <span className="text-blue-700 font-semibold hover:underline cursor-pointer">{book.author}</span>
        </p>
        <p className="text-sm text-gray-600 ">
          Publisher: <span className="text-blue-600 hover:underline cursor-pointer">{book.publisher}</span>
        </p>
        <p className="text-sm text-gray-600">
          Binding: <span className="text-gray-800">{book.binding || "Paperback"}</span> | Language: <span className="text-gray-800">{book.language || "English"}</span>
        </p>
        <div className="flex items-center mt-2">
          <StarRating rating={book.rating} />
        </div>
        <p className="text-lg font-bold text-green-600 mt-1">₹{book.price}</p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-3 mt-4 md:mt-0">
        <Link to={`/buy/${book.id}`} className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md font-semibold text-sm w-[140px] text-center">
          Buy Now
        </Link>

        {!addedToCart ? (
          <button
            onClick={handleAddToCart}
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold text-sm w-[140px]"
          >
            Add to Cart
          </button>
        ) : (
          <span className="text-green-500 text-sm font-semibold">✅ Added</span>
        )}

        {showToastCart && (
          <Toast
            message={`${book.name} Added to Cart`}
            type="success"
            onClose={() => setShowToastCart(false)}
          />
        )}

        {!wishlistMessage ? (
          <button
            onClick={handleAddToWishlist}
            className="bg-white border border-gray-300 hover:bg-gray-100 text-black px-4 py-2 rounded-md font-semibold text-sm w-[140px]"
          >
            Wishlist
          </button>
        ) : (
          <span className="text-pink-600 text-sm font-semibold">❤️ Added to wishlist</span>
        )}
        {showToastWish && (
          <Toast
            message={`${book.name} Added to WishList`}
            type="success"
            onClose={() => setShowToastWish(false)}
          />
        )}
      </div>
    </div>
  );
}






export { CardType1, CardType2 }