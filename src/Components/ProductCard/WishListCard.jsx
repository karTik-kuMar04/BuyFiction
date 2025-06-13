import React, { useState } from 'react';
import { FaHeartBroken, FaCartPlus } from 'react-icons/fa';
import imgNotFound from "/assets/img-notfound.jpg";

function WishlistCard({ book, onRemove, onAddtoCart }) {

  const [added, setAdded] = useState(false);


  const handleAddToCart = () => {
    onAddtoCart(book);
    onRemove(book.id);
  }


  return (
    <div className="flex w-full max-w-[600px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition">
      <img
        src={book.image}
        alt={book.name}
        className="w-[90px] h-[130px] object-cover rounded-md"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imgNotFound;
        }}
      />

      <div className="ml-4 flex flex-col justify-between w-full">
        {/* Book Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{book.name}</h2>
          <p className="text-sm text-gray-500 mt-1">Author: {book.author}</p>
          <p className="text-sm text-gray-500">Publisher: {book.publisher || "Unknown"}</p>
          <p className="text-base text-green-600 font-bold mt-2">₹ {book.price}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          {!added && (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-500 transition"
            >
              <FaCartPlus className="text-sm" />
              Add to Cart
            </button>
          )}
          
          <button
            onClick={() => onRemove(book.id)}
            className="flex items-center gap-2 bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-red-400 transition"
          >
            <FaHeartBroken className="text-sm" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishlistCard;
