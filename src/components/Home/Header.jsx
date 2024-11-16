import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-lg p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
          Smart Storage Systems
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
          <button className="bg-white text-purple-700 px-5 py-2 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition duration-300">
            Home
          </button>
        </Link>
        <Link to="/storages" className="hover:text-gray-300 transition duration-300">
          <button className="bg-white text-purple-700 px-5 py-2 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition duration-300">
            Storages
          </button>
        </Link>
        <Link to="/orders" className="hover:text-gray-300 transition duration-300">
          <button className="bg-white text-purple-700 px-5 py-2 rounded-lg shadow hover:shadow-lg hover:bg-gray-100 transition duration-300">
            Order
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
