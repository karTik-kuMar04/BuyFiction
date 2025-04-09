import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import Allbook from '../WebPageProduct/Allbook'
import { allBooks } from '../Products/mangaProducts'
import { CardType2 } from '../ProductCard/ProductCard'
import AddToCart from '../Functions/AddToCart'

function Search() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState(allBooks)

  const handleSearch = () => {
    

    const filtered = allBooks.filter(book =>
      book.name.toLowerCase().includes(input.toLowerCase()) ||
      book.author?.toLowerCase().includes(input.toLowerCase()) ||
      book.publisher?.toLowerCase().includes(input.toLowerCase()) ||
      book.isbn?.toLowerCase().includes(input.toLowerCase())
    )

    setResults(filtered)
  }
  


  return (
    <div className='flex flex-col ml-[175px] absolute top-20 w-[1250px]'>

      <div className='flex items-center bg-gray-900 rounded-[15px] w-[1200px]'>
        <input className='flex flex-1 text-white text-[20px] px-5 py-4 outline-none'
          type="text"
          placeholder='Search by Tittle, Author, Publisher, ISBN No..'
          onChange={(e)=> setInput(e.target.value.trim())}
          onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
        >
          <FaSearch className='text-white text-3xl relative right-4'/>
        </button>
      </div>

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