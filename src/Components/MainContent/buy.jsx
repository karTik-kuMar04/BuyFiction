import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allBooks } from '../Products/mangaProducts';
import imgNotFound from "../../assets/img-notfound.jpg";
import emailjs from 'emailjs-com';

function Buy() {
  const { id } = useParams();
  const [buyBook, setBuyBook] = useState(null);
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const found = allBooks.find(book => book.id === id);
    if (found) {
      setBuyBook(found);
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleBuy = () => {
    const templateParams = {
      to_email: formData.email,
      book_name: buyBook.name,
      book_price: buyBook.price,
      user_address: formData.address,
      user_phone: formData.phone,
    };
  
    emailjs.send('service_uqmwkei', 'template_v5v5tim', templateParams, 'BPtWTQlWSYij2ZIk4')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully! ✅");
      }, (err) => {
        console.log('FAILED...', err);
        alert("Failed to send email ❌");
      });
  };



  if (!buyBook) {
    return <div className="text-white text-center text-2xl mt-10">Book not found.</div>;
  }

  return (
    <div className="flex justify-center p-10 text-white">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <div className="flex flex-col gap-10">
          <img
            
            src={buyBook.image}
            alt={buyBook.title}
            className="flex justify-cente h-150  rounded-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = imgNotFound;
            }}
          />

          <div className="flex-1">
            <h2 className="flex justify-center text-3xl font-bold mb-2">{buyBook.name}</h2>
            <p className="flex justify-center text-gray-400 mb-1">By {buyBook.author}</p>
            <p className="flex justify-center text-green-400 font-semibold text-xl mb-6">₹{buyBook.price}</p>

            <div className="space-y-4">
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-white outline-none border border-indigo-500 focus:border-green-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-white outline-none border border-indigo-500 focus:border-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg text-white outline-none border border-indigo-500 focus:border-green-400"
              />

              <button
                onClick={handleBuy}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
