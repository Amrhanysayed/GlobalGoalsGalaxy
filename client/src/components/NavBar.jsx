import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { isMobile } from 'react-device-detect';
import { LuLogIn } from "react-icons/lu";
import { IoMdPersonAdd } from "react-icons/io";
import { NavLink } from 'react-router-dom';

/// is moblie don't work
export default function NavBar() {
    
    const [mobile,setMobile]=useState(false);

    useEffect(function(){
        setMobile(isMobile);
    },[])
       console.log(mobile)
  return (
    <nav className=' flex justify-between items-center p-4 bg-white shadow-lg sticky top-0 z-50 '>
        <Logo className="w-[25%] lg:w-[20%]"/>
        <div className=' flex justify-between basis-[80%] items-center '>
         { mobile ? null:   <ul className='hidden  lg:flex basis-[50%] justify-evenly p-2 gap-4  '>
                <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer '> <a >About </a> </li>
                <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-2 py-2 rounded-lg hover:bg-red-200 cursor-pointer '> <a> Contact Us</a> </li>
                <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a> Services</a> </li>
                <li className='font-semibold text-lg text-gray-800 hover:text-gray-900 transition-colors duration-200 ease-in-out px-3 py-2 rounded-lg hover:bg-red-200 cursor-pointer'> <a> Help</a> </li>

            </ul>}
            <div className=' flex gap-4 lg:ml-auto'>
            <NavLink to="login"><button className='btn btn-accent mx-4 w-[100px]'> <LuLogIn /> Log in </button></NavLink>
            <NavLink to="signin"> <button className='btn btn-primary mx-4 w-[100px]'> <IoMdPersonAdd /> Sign in </button></NavLink>
            </div>
        </div>
    </nav>
  )
}
