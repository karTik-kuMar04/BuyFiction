import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { allBooks } from '../../Products/mangaProducts'
import { FaSearch } from 'react-icons/fa'
function SearchBar() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()


  const handleSearch = () => {
    if(input.trim()) {
      navigate(`/search?query=${encodeURIComponent(input.trim())}`)
    }
  }
  
  

  return (
    <div className='flex items-center top-0 border-2 border-black w-[500px] h-[50px]'>
      <input 
        className='flex flex-1 text-xl px-[10px] text-black outline-none'
        type="text"
        placeholder='Search by Tittle, Author, Publisher, ISBN No..'
        onChange={(e)=> setInput(e.target.value.trim())}
        onKeyDown={(e)=> e.key === "Enter" && handleSearch()}
      />
      <button
        className='text-2xl px-4'
        onClick={handleSearch}
      >

        <FaSearch className=''/>
     
      </button>
    </div>
  )
}

export default SearchBar