import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 min-h-[80vh] flex flex-col items-center justify-center space-y-8 p-8" id="contact">
      <h1 className="text-center text-white font-bold text-4xl mb-8 animate-fadeIn">
        Contact Us or Need Any Help?
      </h1>
      <div className="flex space-x-8">
        {[
          { Icon: FaFacebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
          { Icon: FaTwitter, href: 'https://twitter.com', color: 'hover:text-blue-300' },
          { Icon: FaInstagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
          { Icon: FaEnvelope, href: 'mailto:contact@example.com', color: 'hover:text-green-400' },
        ].map(({ Icon, href, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-white text-4xl transition-all duration-300 ease-in-out transform hover:scale-125 ${color}`}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

