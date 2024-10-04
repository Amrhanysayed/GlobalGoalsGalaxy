import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';

const AnimatedButton = ({ 
  text, 
  onClick, 
  icon = <GoArrowRight />, 
  className = '', 
  type = 'button',
  disabled = false
}) => {
  return (
    <motion.button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-full
        font-semibold text-white
        bg-indigo-600 hover:bg-indigo-700
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        transition-all duration-300 ease-in-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}
        ${className}
      `}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{text}</span>
      <motion.span
        className="ml-2"
        initial={{ x: 0 }}
        animate={{ x: 3 }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.5
        }}
      >
        {icon}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;