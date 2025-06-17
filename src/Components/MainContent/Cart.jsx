import React, { useState, useEffect } from 'react';
import CartProductCard from '../ProductCard/CartProductCard';
import { cartProduct as initialCart } from '../Products/mangaProducts';
import { Link } from 'react-router-dom';
import Toast from '../MainContent/Toast.jsx';


function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : initialCart;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initial = {};
    cartItems.forEach(book => {
      initial[book.id] = book.quantity || 1;
    });
    setQuantities(initial);
  }, [cartItems]);

  useEffect(() => {
    const cartWithQuantities = cartItems.map(book => ({
      ...book,
      quantity: quantities[book.id] || 1
  }));

  localStorage.setItem("cart", JSON.stringify(cartWithQuantities));
    window.dispatchEvent(new Event("cartUpdated"));
  }, [cartItems, quantities]);

  const [shippingPrice, setShippingPrice] = useState(40); // default for 3 days

  const [shippingDays, setShippingDays] = useState(3); // default: 3-day delivery
  const shippingOptions = [
    { label: "5 Days (Free)", days: 5, price: 0 },
    { label: "3 Days (+₹40)", days: 3, price: 40 },
    { label: "Tomorrow (+₹80)", days: 1, price: 80 }
  ];

  useEffect(() => {
    const selected = shippingOptions.find(option => option.days === shippingDays);
    setShippingPrice(selected.price);
  }, [shippingDays]);

  const getEstimatedDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + shippingDays);
    return deliveryDate.toDateString(); // You can format it however you like
  };


  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = cartItems.reduce((sum, book) => {
    const qty = quantities[book.id] || 1;
    return sum + book.price * qty;
  }, 0);
  const payablePrice = totalPrice + shippingPrice;

  const handleRemove = (id) => {
    const removedBook = cartItems.find(book => book.id === id);
    const updatedCart = cartItems.filter(book => book.id !== id);
    setCartItems(updatedCart);
    setQuantities(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });

    setToastMessage(`${removedBook.name} removed from cart`);
    setShowToastRemove(true);
  };


  const handleQuantityChange = (bookId, qty) => {
    setQuantities(prev => ({ ...prev, [bookId]: qty }));
  };




  const [toastMessage, setToastMessage] = useState("");
  const [showToastRemove, setShowToastRemove] = useState(false);

  useEffect(() => {
    if (showToastRemove) {
      const timer = setTimeout(() => {
        setShowToastRemove(false);
        setToastMessage("");
      }, 3000); // dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showToastRemove]);




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
                <div className="flex justify-between items-center">
                  <span>
                    Shipping: 
                    <select
                      value={shippingDays}
                      onChange={(e) => setShippingDays(Number(e.target.value))}
                      className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm bg-white outline-none"
                    >
                      {shippingOptions.map(option => (
                        <option key={option.days} value={option.days}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </span>
                  <span className="text-green-600 font-semibold">₹{shippingPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className="text-gray-800 font-medium">{getEstimatedDeliveryDate()}</span>
                </div>

                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Payable Amount</span>
                  <span className="text-green-700">₹{payablePrice}</span>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <Link to="/Cart/buy" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-2 rounded-md font-semibold">
                  Proceed to Buy
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <p className="text-gray-800 text-2xl font-semibold mb-2">🛒 Your cart is empty!</p>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything yet.</p>
            <Link to="/home" className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md font-medium">
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
      {showToastRemove && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => setShowToastRemove(false)}
        />
      )}


    </div>
  );
}

export default Cart;
