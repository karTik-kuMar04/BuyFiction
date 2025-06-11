import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '/assets/Inkverse.png';


function Logo() {
  return (
    <Link to="/home">
      <img 
        src={logo}
        className='w-[150px] h-[100px]' 
      />
    </Link>
  )
}

export default Logo