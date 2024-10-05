import React, { useState } from 'react';
import Logo from './Logo';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

export default function NavBarS() {
    const [showMenu, setShowMenu] = useState(false);

    function handleBars() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className='flex justify-between items-center p-4 bg-white shadow-lg sticky top-0 z-50'>
            <Logo className="w-[25%] lg:w-[20%]" />
            <div className='flex justify-between basis-[80%] items-center'>
                {/* Navigation Links */}
                <ul className='hidden lg:flex basis-[50%] justify-evenly p-2 gap-4'>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#About" target="_blank" rel="noopener noreferrer">About</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-2 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#Services" target="_blank" rel="noopener noreferrer">Services</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#Help" target="_blank" rel="noopener noreferrer">Help</a>
                    </li>
                </ul>

                {/* User Name and Icon */}
                <div className='flex items-center gap-2 lg:ml-auto text-blue-600'>
                    {/* User Icon */}
                    <FaUserCircle size={32} className="text-blue-600" />
                    {/* User Name */}
                    <div className='font-semibold text-lg'>
                        Teacher101
                    </div>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button onClick={handleBars}>
                    <FaBars size={25} className='lg:hidden transition-colors duration-200 ease-in-out hover:text-yellow-300' />
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <button onClick={handleBars}>
                    <ImCross size={20} className='m-3 absolute right-0 top-0 transition-colors duration-200 ease-in-out hover:text-yellow-300' />
                </button>
                <ul className='flex flex-col p-4 gap-4'>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#About" target="_blank" rel="noopener noreferrer">About</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-2 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#contact" target="_blank" rel="noopener noreferrer">Contact Us</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#Services" target="_blank" rel="noopener noreferrer">Services</a>
                    </li>
                    <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>
                        <a href="/#Help" target="_blank" rel="noopener noreferrer">Help</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
