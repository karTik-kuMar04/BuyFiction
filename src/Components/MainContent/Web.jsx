import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  useEffect(() => {
    const heading = document.querySelector('.animate-heading');
    const paragraph = document.querySelector('.animate-paragraph');
    const buttons = document.querySelector('.animate-buttons');

    setTimeout(() => heading.classList.add('fade-in-down'), 100);
    setTimeout(() => paragraph.classList.add('fade-in-up'), 600);
    setTimeout(() => buttons.classList.add('fade-in'), 1000);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white">
      {/* Animated Bubbles Background */}
      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <li
            key={i}
            className="absolute w-6 h-6 bg-white rounded-full opacity-10 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </ul>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pb-16">
        <h1 className="text-6xl leading-tight font-extrabold mb-6 animate-heading opacity-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Turn Every Page into an Adventure
        </h1>

        <p className="text-lg text-blue-300 font-light italic tracking-wide max-w-xl mb-10 opacity-0 animate-paragraph">
          Discover bestselling novels, academic gems, and hidden literary treasures — all in one vibrant bookstore.
        </p>

        <div className="flex gap-4 opacity-0 animate-buttons">
          <Link
            to="/home"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:brightness-110 transition"
          >
            Browse Books
          </Link>
          <Link
            to="/user"
            className="border border-purple-500 text-purple-400 font-semibold px-6 py-3 rounded-md hover:bg-purple-900 hover:text-white transition"
          >
            Create Account
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .fade-in-down {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease-out;
          }

          .fade-in-up {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease-in;
          }

          .fade-in {
            opacity: 1;
            transition: opacity 0.6s ease-in-out;
          }

          .animate-heading {
            transform: translateY(-40px);
          }

          .animate-paragraph {
            transform: translateY(20px);
          }

          .animate-bubble {
            bottom: -60px;
            animation-name: rise;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }

          @keyframes rise {
            0% {
              transform: translateY(0) scale(1);
            }
            100% {
              transform: translateY(-100vh) scale(0.5);
            }
          }
        `}
      </style>
    </div>
  );
}