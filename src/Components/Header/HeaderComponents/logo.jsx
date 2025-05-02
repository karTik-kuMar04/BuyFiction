import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Logo() {
  return (
    <NavLink to="/home">
      <img 
        src="assets/Inkverse.png"
        className='w-[150px] h-[100px]' 
      />
    </NavLink>
  )
}

export default Logo