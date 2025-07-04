import React, { Component, useEffect, useState } from 'react'
import { wishList as initallWishlist } from '../Products/mangaProducts';
import imgNotFound from "/assets/img-notfound.jpg";
import WishlistCard from '../ProductCard/WishListCard';
import AddToCart from '../Functions/AddToCart'

function WishList () {
  const [wishlist, setWishlist] = useState(()=>{
    const storedList = localStorage.getItem('wishlist');
    return storedList ? JSON.parse(storedList) : initallWishlist;
    

  });
  useEffect(() => {
  const updateWishlist = () => {
    const storedList = localStorage.getItem('wishlist');
    setWishlist(storedList ? JSON.parse(storedList) : []);
  };

  // Listen for localStorage changes
  window.addEventListener('wishlistUpdated', updateWishlist);

  return () => {
    window.removeEventListener('wishlistUpdated', updateWishlist);
  };
}, []);



  const removeFromWishlist = (id)=>{
    const updatedList = wishlist.filter(book => book.id !== id)
    setWishlist(updatedList)
  }

 
  return (
    <div className="p-6 text-black">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {wishlist.map((book, index) => (
            <WishlistCard
              key={book.id || index}
              book={book}
              onRemove={removeFromWishlist}
              onAddtoCart={() => AddToCart(book)}
            />
          ))}
        </div>
      ) : (
        <p className="text-black text-center text-xl">Your wishlist is empty.</p>
      )}

    </div>
  );
}


export default WishList