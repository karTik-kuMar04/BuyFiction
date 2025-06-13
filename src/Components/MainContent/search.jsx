import React from 'react'
import { useLocation } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import Allbook from '../WebPageProduct/Allbook'
import { allBooks } from '../Products/mangaProducts'
import { CardType2 } from '../ProductCard/ProductCard'
import AddToCart from '../Functions/AddToCart'


function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Search() {
  
  const query = useQuery()
  const searchTerm = query.get('query')?.toLowerCase() || ''
    
  
  const results = allBooks.filter(book =>
    book.name.toLowerCase().includes(searchTerm) ||
    book.author?.toLowerCase().includes(searchTerm) ||
    book.publisher?.toLowerCase().includes(searchTerm) ||
    book.isbn?.toLowerCase().includes(searchTerm)
  )

  return (
    <div className='flex flex-col justify-center h-full  top-20 '>

      <div className='flex justify-center'>
        {results.length > 0 ?(
          
          <div className='flex flex-col gap-3 mt-[50px]'>
            {results.map((book, index) => (
              <CardType2 book={book} index={index} key={book.id || index} onAddtoCart={() => AddToCart(book)}/>
            ))}
          </div>
        ):(
          <p className='text-white text-xl mt-8 text-center'>No books found.</p>
        )} 
      </div>
    </div>
  )

}

export default Search