import React from 'react'
import { FaUserCircle, FaQuestionCircle } from 'react-icons/fa';
function LayoutNavBar() {
  return (
    <header className="p-4 bg-white shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src="../../src/images/logo.jpg" alt="Logo" className="h-16 w-16 mr-2" />
        <span className="font-bold text-xl text-slate-900">Global Goals Galaxy</span>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <button aria-label="Help">
          <FaQuestionCircle size={24} className='text-slate-900' />
        </button>
        <button aria-label="Account Settings">
          <FaUserCircle size={24} className='text-slate-900' />
        </button>
      </div>
    </div>
  </header>
  )
}

export default LayoutNavBar