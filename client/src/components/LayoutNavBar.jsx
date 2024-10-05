import React from 'react';
import { FaUserCircle, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function LayoutNavBar() {
  return (
    <header className="p-0 bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center flex-1">
          <Link to="/">
            <img
              src="../../src/images/logo.jpg"
              alt="Logo"
              className="h-16 w-16 mr-2"
            />
          </Link>
          <Link to="/" className="font-bold text-xl text-slate-900">
            Global Goals Galaxy
          </Link>
        </div>

        {/* Center Section: Levels Button */}
        <div className="flex items-center justify-center flex-none">
          <Link
            to="/layout"
            className="px-4 py-2 font-semibold rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"
          >
            Levels
          </Link>
        </div>

        {/* Right Section: User Icon and Name */}
        <div className="flex items-center space-x-4 flex-1 justify-end text-blue-600">
          {/* User Icon */}
          <FaUserCircle size={32} className="text-blue-600" />
          {/* User Name */}
          <div className="font-semibold text-lg">
            Teacher101
          </div>
        </div>
      </div>
    </header>
  );
}

export default LayoutNavBar;
