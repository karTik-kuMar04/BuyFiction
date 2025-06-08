import React from 'react'
import { FaHeartBroken, FaCartPlus } from 'react-icons/fa'
import onAddToCart from "../Functions/AddToCart"

function WishlistCard({ book, onRemove, onAddtoCart }) {

  return (
    <div className="flex bg-gray-800 text-white rounded-lg shadow-md p-4 gap-4 w-[600px] hover:shadow-lg transition">
      <img
        src={book.image}
        alt={book.name}
        className="w-[100px] h-[140px] object-cover rounded-md"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold">{book.name}</h2>
          <p className="text-gray-400 text-sm mt-1">Author: {book.author}</p>
          <p className="text-gray-400 text-sm">Publisher: {book.publisher}</p>
          <p className="text-yellow-400 font-semibold mt-2">₹ {book.price}</p>
        </div>

        <div className="flex gap-4 mt-3">
          <button
            onClick={() => onAddtoCart(book)}
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-1 rounded flex items-center gap-2"
          >
            <FaCartPlus />
            Add to Cart
          </button>
          <button
            onClick={() => onRemove(book.id)}
            className="bg-red-600 hover:bg-red-500 text-white px-4 py-1 rounded flex items-center gap-2"
          >
            <FaHeartBroken />
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard
