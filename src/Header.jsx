import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white text-purple-700 shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">Smart Storage Systems</div>

      {/* Navigation Links */}
      <nav className="flex space-x-4">
        <Link to="/">
          <button className="bg-gray-300 hover:bg-gray-400 text-purple-700 px-4 py-2 rounded">
            Home
          </button>
        </Link>
        <Link to="/storages">
          <button className="bg-gray-300 hover:bg-gray-400 text-purple-700 px-4 py-2 rounded">
            Storages
          </button>
        </Link>
        <Link to="/orders">
          <button className="bg-gray-300 hover:bg-gray-400 text-purple-700 px-4 py-2 rounded">
            Order
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
