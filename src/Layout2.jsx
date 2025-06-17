import React from 'react'
import { Outlet } from 'react-router-dom'
import Header2 from './Components/Header/Header2'

function Layout2() {
  return (
    <div
      className='flex flex-col'
    >
      <Header2 />
      <main
        className='flex-grow'>
          <Outlet />

      </main>
      
    </div>
  )
}

export default Layout2