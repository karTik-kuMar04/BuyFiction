import React, { Component, useState } from 'react'
import { wishList as initallwishlist } from '../Products/mangaProducts';
import imgNotFound from"assets/img-notfound.jpg"

function WishList () {
  const [wishlist, setWishlist] = useState(initallwishlist)
  const removeFromWishlist = (id)=>{
    const updatedList = wishlist.filter(book => book.id !== id)
    setWishlist(updatedList)
  }

  return (
    <div className="p-6 ml-[200px]">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty. 😔</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = imgNotFound;
                }}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">By {item.author}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-full text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default WishList