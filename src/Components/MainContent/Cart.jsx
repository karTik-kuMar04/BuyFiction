import React, { useState, useEffect } from 'react';
import CartProductCard from '../ProductCard/CartProductCard';
import { cartProduct as initialCart } from '../Products/mangaProducts';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : initialCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);

  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    initialCart.forEach(book => {
      initial[book.id] = book.quantity || 1;
    });
    return initial;
  });

  const [shippingTime, setShippingTime] = useState("3 - 4");
  const [shippingPrice, setShippingPrice] = useState(40);

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cartItems.reduce((sum, book) => {
    const qty = quantities[book.id] || 1;
    return sum + book.price * qty;
  }, 0);
  const payablePrice = totalPrice + shippingPrice;

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter(book => book.id !== id);
    setCartItems(updatedCart);
    setQuantities(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleQuantityChange = (bookId, qty) => {
    setQuantities(prev => ({ ...prev, [bookId]: qty }));
  };

  return (
    <div className="flex justify-center px-4 py-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        {cartItems.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>

            <div className="space-y-4">
              {cartItems.map(book => (
                <CartProductCard
                  key={book.id}
                  book={book}
                  quantity={quantities[book.id]}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white shadow-md rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Price</span>
                  <span className="text-green-600 font-semibold">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping (Est. {shippingTime} days)</span>
                  <span className="text-green-600 font-semibold">₹{shippingPrice}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Payable Amount</span>
                  <span className="text-green-700">₹{payablePrice}</span>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Link to="/buy" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-2 rounded-md font-semibold">
                  Proceed to Buy
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <p className="text-gray-800 text-2xl font-semibold mb-2">🛒 Your cart is empty!</p>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md font-medium">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
