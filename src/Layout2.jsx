import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout2() {
  return (
    <div
      className='flex'>
      <main
        className='flex-grow'>
          <Outlet />

      </main>
      
    </div>
  )
}

export default Layout2