import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

function CartBuy() {
  const [cartItems, setCartItems] = useState([]);
  const [shippingDays, setShippingDays] = useState(3);
  const [shippingPrice, setShippingPrice] = useState(40);
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: ''
  });

  const shippingOptions = [
    { label: "5 Days (Free)", days: 5, price: 0 },
    { label: "3 Days (+₹40)", days: 3, price: 40 },
    { label: "Tomorrow (+₹80)", days: 1, price: 80 }
  ];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const selected = shippingOptions.find(option => option.days === shippingDays);
    setShippingPrice(selected?.price || 0);
  }, [shippingDays]);

  const getEstimatedDeliveryDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + shippingDays);
    return date.toDateString();
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBuy = () => {
    if (!formData.email || !formData.phone || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }

    const orderDetails = cartItems.map(book => `${book.name} (x${book.quantity || 1}) - ₹${book.price * (book.quantity || 1)}`).join('\n');
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const totalPayable = totalPrice + shippingPrice;

    const templateParams = {
      to_email: formData.email,
      book_name: orderDetails,
      book_price: totalPayable,
      user_address: formData.address,
      user_phone: formData.phone,
      delivery_date: getEstimatedDeliveryDate(),
    };

    emailjs.send('service_uqmwkei', 'template_v5v5tim', templateParams, 'BPtWTQlWSYij2ZIk4')
      .then(() => alert("Order placed! Confirmation email sent ✅"))
      .catch(() => alert("Failed to send email ❌"));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const totalPayable = totalPrice + shippingPrice;

  if (cartItems.length === 0) {
    return <div className="text-center text-gray-800 text-xl mt-10">Your cart is empty.</div>;
  }

  return (
    <div className="flex justify-center px-4 py-10 bg-[#f5f5f5] min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Your Order</h2>

        <ul className="space-y-2 mb-6">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between text-gray-700">
              <span>{item.name} (x{item.quantity || 1})</span>
              <span>₹{item.price * (item.quantity || 1)}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1 text-gray-700">Choose Delivery Option:</label>
          <select
            value={shippingDays}
            onChange={(e) => setShippingDays(Number(e.target.value))}
            className="w-full p-2 bg-white border border-gray-300 rounded text-gray-800"
          >
            {shippingOptions.map(option => (
              <option key={option.days} value={option.days}>{option.label}</option>
            ))}
          </select>
          <p className="text-sm text-gray-600 mt-2">
            Shipping: ₹{shippingPrice} | Estimated delivery: {getEstimatedDeliveryDate()}
          </p>
        </div>

        <div className="text-lg font-semibold text-green-700 mb-6">
          Total Payable: ₹{totalPayable}
        </div>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-gray-800 bg-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-gray-800 bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 text-gray-800 bg-white"
          />
        </div>

        <button
          onClick={handleBuy}
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded text-white text-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartBuy;
