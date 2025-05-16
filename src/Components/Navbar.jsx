import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white flex justify-around items-center p-4 shadow-md">
      <Link to="/home">
        <h1 className="text-lg font-semibold hover:text-yellow-400 cursor-pointer">HOME</h1>
      </Link>
      <Link to="/liked">
        <h1 className="text-lg font-semibold hover:text-yellow-400 cursor-pointer">LIKED</h1>
      </Link>
      <Link to="/disliked">
        <h1 className="text-lg font-semibold hover:text-yellow-400 cursor-pointer">DISLIKED</h1>
      </Link>
      <Link to="/login">
        <h1 className="text-lg font-semibold hover:text-red-400 cursor-pointer">LOGOUT</h1>
      </Link>
    </div>
  );
};

export default Navbar;
