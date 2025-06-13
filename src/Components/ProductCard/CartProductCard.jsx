import React from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from "/assets/img-notfound.jpg";

function CartProductCard({ book, quantity, onQuantityChange, onRemove }) {
  const handleChange = (e) => {
    onQuantityChange(book.id, parseInt(e.target.value));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row items-center justify-between w-full border border-gray-200">
      {/* Book Image */}
      <Link to={`/book/${book.id}`} className="mb-4 md:mb-0">
        <img
          src={book.image}
          alt={book.name}
          className="w-[120px] h-[170px] object-cover rounded-md"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgNotFound;
          }}
        />
      </Link>

      {/* Book Info */}
      <div className="flex-1 md:ml-6 text-black w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex flex-col gap-1">
            <Link to={`/book/${book.id}`}>
              <h2 className="text-lg font-bold hover:text-blue-600 hover:underline">
                {book.name}
              </h2>
            </Link>
            <p className="text-sm text-gray-600">
              By <span className="font-semibold text-indigo-500">{book.author}</span>
            </p>
          </div>

          {/* Quantity and Price */}
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <div className="text-sm">
              <label className="font-semibold mr-2">Qty:</label>
              <select
                value={quantity}
                onChange={handleChange}
                className="border border-gray-300 px-2 py-1 rounded bg-white"
              >
                {[...Array(book.stock).keys()].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-green-600 font-bold text-lg">
              ₹{book.price * quantity}
            </div>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <div className="mt-4 md:mt-0 md:ml-4">
        <button
          onClick={() => onRemove(book.id)}
          className="bg-red-500 hover:bg-red-400 text-white text-sm px-4 py-2 rounded-md font-semibold"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProductCard;
