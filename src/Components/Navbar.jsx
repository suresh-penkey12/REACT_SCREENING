import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg p-4 px-8 backdrop-blur-md bg-opacity-80 flex flex-wrap justify-center md:justify-between items-center">
      <Link to="/home" className="text-lg font-bold px-4 py-2 transition duration-200 hover:text-yellow-400 hover:scale-105">
        HOME
      </Link>
      <Link to="/liked" className="text-lg font-bold px-4 py-2 transition duration-200 hover:text-green-400 hover:scale-105">
        LIKED
      </Link>
      <Link to="/disliked" className="text-lg font-bold px-4 py-2 transition duration-200 hover:text-pink-400 hover:scale-105">
        DISLIKED
      </Link>
      <Link to="/login" className="text-lg font-bold px-4 py-2 transition duration-200 hover:text-red-400 hover:scale-105">
        LOGOUT
      </Link>
    </div>
  );
};

export default Navbar;
