import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allBooks } from '../Products/mangaProducts';
import imgNotFound from "/assets/img-notfound.jpg";
import emailjs from 'emailjs-com';

function Buy() {
  const { id } = useParams();
  const [buyBook, setBuyBook] = useState(null);
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
    const found = allBooks.find(book => book.id === id);
    if (found) {
      setBuyBook(found);
    }
  }, [id]);

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

    const templateParams = {
      to_email: formData.email,
      book_name: buyBook.name,
      book_price: buyBook.price + shippingPrice,
      user_address: formData.address,
      user_phone: formData.phone,
      delivery_date: getEstimatedDeliveryDate(),
    };

    emailjs.send('service_uqmwkei', 'template_v5v5tim', templateParams, 'BPtWTQlWSYij2ZIk4')
      .then(() => alert("Order placed! Confirmation email sent ✅"))
      .catch(() => alert("Failed to send email ❌"));
  };

  if (!buyBook) return <div className="text-center text-gray-800 text-xl mt-10">Book not found.</div>;

  const totalPrice = buyBook.price + shippingPrice;

  return (
    <div className="flex justify-center px-4 py-10 bg-[#f5f5f5] min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={buyBook.image}
            alt={buyBook.name}
            onError={(e) => (e.target.src = imgNotFound)}
            className="w-full md:w-1/2 h-[400px] object-cover rounded-lg border border-gray-200"
          />

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-1 text-gray-800">{buyBook.name}</h2>
              <p className="text-gray-500 mb-3">By {buyBook.author}</p>
              <p className="text-green-600 text-xl font-semibold">Price: ₹{buyBook.price}</p>

              <div className="mt-6">
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

                <div className="mt-3 text-sm text-gray-600">
                  Shipping: ₹{shippingPrice} | Estimated delivery: {getEstimatedDeliveryDate()}
                </div>
                <div className="mt-2 text-lg font-semibold text-green-700">
                  Total Payable: ₹{totalPrice}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-400 text-gray-800 bg-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-400 text-gray-800 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-400 text-gray-800 bg-white"
              />
              <button
                onClick={handleBuy}
                className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded text-white text-lg font-semibold transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
