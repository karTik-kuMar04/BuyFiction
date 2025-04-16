import React from 'react';
import { Link } from 'react-router-dom';
import imgNotFound from "/assets/img-notfound.jpg";
import { cartProduct } from '../Products/mangaProducts';

function CartProductCard({ book, quantity, onQuantityChange, onRemove }) {
  const handleChange = (e) => {
    onQuantityChange(book.id, parseInt(e.target.value));
  };

  return (
    <div className="flex w-[100%] border-t-2 border-b-2 border-gray-600 py-6 px-5 rounded-2xl">
      <Link to={`/book/${book.id}`}>
        <img
          src={book.image}
          className="w-[150px] h-[200px] rounded-2xl object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imgNotFound;
          }}
          alt={book.name}
        />
      </Link>
      <div className='flex flex-row justify-between w-full'>
        <div className="flex flex-col justify-between ml-[50px]">
          <div>
            <Link to={`/book/${book.id}`}><div className="text-white text-2xl font-bold hover:text-blue-400 hover:underline">{book.name}</div></Link>
            <Link><div className="text-white flex">By: <p className='ml-[10px] text-indigo-500 font-semibold hover:underline'>{book.author}</p></div></Link>
          </div>

          <div className="text-white flex gap-4 items-center">
            <div>
              Qty:
              <select
                value={quantity}
                onChange={handleChange}
                className="ml-2 bg-gray-800 text-white p-1 rounded"
              >
                {[...Array(book.stock).keys()].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-green-400 text-lg font-bold">
              ₹{book.price * quantity}
            </div>
          </div>
        </div>
        <div className='flex items-center mr-[20px]'>
          <button  
            className='px-[10px] py-[4px] bg-red-600 text-white font-semibold rounded-md'
            onClick={() => onRemove(book.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductCard;
