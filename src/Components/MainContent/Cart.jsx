import React, { useState } from 'react';
import CartProductCard from '../ProductCard/CartProductCard';
import { cartProduct as initialCart } from '../Products/mangaProducts';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState(initialCart); // ✅ create state
  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    initialCart.forEach(book => {
      initial[book.id] = book.quantity || 1;
    });
    return initial;
  });
  const [shippingTime, setShippingTime] = useState("3 - 4")
  const [shippingPrice, setShippingPrice] = useState(40)

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(book => book.id !== id);
    setCartItems(updatedCart); // ✅ update state
    setQuantities(prev => {
      const updated = { ...prev };
      delete updated[id]; // remove qty from state
      return updated;
    });
  };

  const handleQuantityChange = (bookId, qty) => {
    setQuantities(prev => ({ ...prev, [bookId]: qty }));
  };

  const totalPrice = cartItems.reduce((sum, book) => {
    const qty = quantities[book.id] || 1;
    return sum + book.price * qty;
  }, 0);
  const payablePrice = totalPrice + shippingPrice;

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col mt-[200px] w-[1000px] bg-gray-200 rounded-2xl">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(book => (
              <CartProductCard
                key={book.id}
                book={book}
                quantity={quantities[book.id]}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
            <div className="mt-4 text-white text-xl">
              <div className='flex flex-row justify-between ml-[20px] mb-[20px] '>
                <div className='flex flex-col gap-2'>
                  <span className='flex justify-between w-[200px]'>Total Items: <p>{totalItems}</p></span> 
                  <span className='flex justify-between w-[200px]'>Total Price: <p className='text-green-500 font-semibold'>₹{totalPrice}</p></span>
                  <span className='text-sm text-green-400 mt-[20px] ml-[20px]'>Ships within {shippingTime} days</span>
                </div>
                <div className='mr-[20px]'>
                  <span className='flex justify-between w-[250px]'>Shipping Price: <p className=' text-green-500 font-semibold'>₹{shippingPrice}</p></span>
                  <span className='flex justify-between w-[250px]'>Payable Amount: <p className='text-green-500 font-semibold'>₹{payablePrice}</p></span>
                  <Link to={`/buy`} className='flex justify-center mt-5'>
                    <button className='px-[50px] py-[5px] bg-amber-600 rounded-md'>Buy</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[300px] text-center">
            <p className="text-black text-2xl font-semibold mb-4">🛒 Your cart is empty!</p>
            <p className="text-gray-700 mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
    
  );
}

export default Cart;
