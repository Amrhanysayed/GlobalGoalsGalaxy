import React, { useEffect, useState } from 'react'
import Logo from './Logo'
// import { isMobile } from 'react-device-detect';
import { LuLogIn } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';

/// is moblie don't work
export default function NavBar() {
    
    // const [mobile,setMobile]=useState(false);

    // useEffect(function(){
    //     setMobile(isMobile);
    // },[])
    //    console.log(mobile)
    const [showMenu, setShowMenu] = useState(false);
   function handleBars(){
        setShowMenu(!showMenu);

    }

return (
    <nav className='flex justify-between items-center p-4 bg-white shadow-lg sticky top-0 z-50'>
            <Logo className="w-[25%] lg:w-[20%]"/>
            <div className='flex justify-between basis-[80%] items-center'>
                 <ul className='hidden lg:flex basis-[50%] justify-evenly p-2 gap-4'>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#About'>About</a> </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-2 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#contact'>Contact Us</a> </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#Services'>Services</a> </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#contact'>Help</a> </li>
                    </ul>
                    <div className='flex gap-4 lg:ml-auto'>
                            <NavLink to="login"><button className='btn btn-accent mx-4 w-[100px]'> <LuLogIn /> Log in </button></NavLink>
                            <NavLink to="signin"><button className='btn btn-primary mx-4 w-[100px]'> <IoMdPersonAdd /> Sign in </button></NavLink>
                    </div>
                    <button onClick={handleBars}><FaBars size={25} className='lg:hidden transition-colors duration-200 ease-in-out hover:text-yellow-300'/></button>  
            </div>
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                    
                 <button onClick={handleBars}>   <ImCross size={20} className='m-3 absolute right-0 top-0 transition-colors duration-200 ease-in-out hover:text-yellow-300 ' /></button>
                    <ul className='flex flex-col p-4 gap-4'>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'>  <a href='#About'>About</a>  </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-2 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#contact'>Contact Us</a> </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#Services'>Services</a> </li>
                            <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a href='#contact'>Help</a> </li>
                    </ul>
            </div>
    </nav>
)
}
