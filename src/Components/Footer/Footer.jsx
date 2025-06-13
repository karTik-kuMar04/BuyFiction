import React from 'react';
import { Link } from 'react-router-dom';
import { FaCopyright, FaHome, FaBook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { MdInfoOutline } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10 mt-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Logo / About Section */}
        <div>
          <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <FaBook /> InkVerse
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Explore thousands of books, discover your next great read, and enjoy seamless delivery right to your door.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline hover:text-indigo-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:underline hover:text-indigo-400 transition">About</Link></li>
            <li><Link to="/cart" className="hover:underline hover:text-indigo-400 transition">Cart</Link></li>
            <li><Link to="/search" className="hover:underline hover:text-indigo-400 transition">Search</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/category/manga" className="hover:underline hover:text-indigo-400 transition">Manga</Link></li>
            <li><Link to="/category/fiction" className="hover:underline hover:text-indigo-400 transition">Fiction</Link></li>
            <li><Link to="/category/scifi" className="hover:underline hover:text-indigo-400 transition">Sci-Fi</Link></li>
            <li><Link to="/category/horror" className="hover:underline hover:text-indigo-400 transition">Horror</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +91 8826395569</li>
            <li className="flex items-center gap-2"><FaEnvelope /> mysoulisinfinity1@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        <span className="flex justify-center items-center gap-1">
          <FaCopyright className="text-xs" /> {new Date().getFullYear()} InkVerse. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
