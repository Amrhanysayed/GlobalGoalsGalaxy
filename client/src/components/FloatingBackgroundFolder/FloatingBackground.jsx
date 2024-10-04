import React from 'react';
import './FloatingBackground.css'; // Import the CSS for the animation

const FloatingBackground = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-100"> {/* Ensure overflow is hidden to clip images */}
      {/* Floating Images */}
      <img
        src="https://picsum.photos/200/300?random=1"
        alt="Floating decoration 1"
        className="floating-image top-10 left-10 w-32 h-32"
      />
      <img
        src="https://picsum.photos/200/300?random=2"
        alt="Floating decoration 2"
        className="floating-image top-40 right-10 w-32 h-32"
      />
      <img
        src="https://picsum.photos/200/300?random=3"
        alt="Floating decoration 3"
        className="floating-image bottom-10 left-1/3 w-32 h-32"
      />

      {/* Content that will be displayed on top of the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloatingBackground;
