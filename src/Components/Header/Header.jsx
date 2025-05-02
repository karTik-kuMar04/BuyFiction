import React from 'react'
import Logo from './HeaderComponents/logo'
import SearchBar from './HeaderComponents/SearchBar'
import NavigationBtn from"./HeaderComponents/Navigation"

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#cfccc6e8] shadow-lg">
      <div
        className='flex justify-around items-center'
      >

        <div className=''>
          < Logo />
        </div>

        <div className="">
          < SearchBar />
        </div>

        <div className="">
          < NavigationBtn />
        </div>

      </div>
    </header>
  )
}

export default Header