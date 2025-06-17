import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '/assets/Inkverse.png';


function Header2() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className=" text-blue-600 text-xl font-bold hover:text-blue-800 "
      >
        ← Back
      </button>

      {/* Logo Link */}
      <NavLink to="/home" className="text-xl font-bold text-gray-800 hover:text-indigo-600">
        <img 
          src={logo}
          className='w-[150px] h-[100px]' 
        />
      </NavLink>

      {/* Empty placeholder to keep spacing even */}
      <div className="w-[60px]" />
    </header>
  );
}

export default Header2;
