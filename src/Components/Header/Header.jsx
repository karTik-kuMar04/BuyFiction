
import React from 'react';
import Logo from './HeaderComponents/logo';
import SearchBar from './HeaderComponents/SearchBar';
import NavigationBtn from './HeaderComponents/Navigation';

function Header() {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <SearchBar />
        </div>

        {/* Navigation Buttons */}
        <div className="flex-shrink-0">
          <NavigationBtn />
        </div>
      </div>
    </header>
  );
}

export default Header;
