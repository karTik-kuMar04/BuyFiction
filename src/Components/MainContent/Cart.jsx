import React, { Component } from 'react'
import { CardType2 } from '../ProductCard/ProductCard'
import { cartProduct } from '../Products/mangaProducts'


function Cart () {
  const totalPrice = cartProduct.reduce((total, book) => total + book.price, 0)

  return (
    <div className='ml-[200px] mt-[100px] w-[1000px]'>
      {cartProduct.map((book, index)=>(
        <CardType2 key={book.id || index} book={book} index={index} onAddtoCart={() => AddToCart(book)}/>
      ))}
      <div className='mt-4 text-white text-xl'>
      <p>Total Items: {cartProduct.length} || total Price: ₹{totalPrice}</p>

      </div>
    </div>
  )
}


export default Cart