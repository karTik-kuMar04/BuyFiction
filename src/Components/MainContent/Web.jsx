import React from 'react'
import { NavLink } from 'react-router-dom'

function Web() {
  return (
    <NavLink to="/home" className="ml-[175px] absolute top-0 w-[85%] mt-[70px]">
      <img src='../../src/assets/logo.png' alt="Logo" className='h-[100vh] w-full '/>
    </NavLink>
  )
}

export default Web