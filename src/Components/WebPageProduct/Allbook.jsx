import React, { Component } from 'react'
import { allBooks } from '../Products/mangaProducts'
import { CardType2 } from '../ProductCard/ProductCard'

function Allbook () {

  return (
    <div className='flex flex-col gap-3 mt-[50px]'>
      {allBooks.map((book, index) => (
        <CardType2 book={book} index={index} key={book.id || index}/>
      ))}
    </div>
  )

}

export default Allbook