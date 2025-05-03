import React, { Component, useState } from 'react'
import { wishList as initallwishlist } from '../Products/mangaProducts';
import imgNotFound from "/assets/img-notfound.jpg";
import WishlistCard from '../ProductCard/WishListCard';
import AddToCart from '../Functions/AddToCart'

function WishList () {
  const [wishlist, setWishlist] = useState(initallwishlist)
  const removeFromWishlist = (id)=>{
    const updatedList = wishlist.filter(book => book.id !== id)
    setWishlist(updatedList)
  }

 
  return (
    <div className="p-6 ml-[200px] mt-[200px]">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="flex flex-col gap-4">
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
        <p className="text-white text-center text-xl">Your wishlist is empty.</p>
      )}

    </div>
  );
}


export default WishList