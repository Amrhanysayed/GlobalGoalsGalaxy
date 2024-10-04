import React, { useState, useEffect } from 'react';
import './FloatingBackground.css'; // Import the CSS for the animation

import img0 from '../../assets/img0.png';
import img1 from '../../assets/img0.png';
import img2 from '../../assets/img0.png';
import img3 from '../../assets/img0.png';
import img4 from '../../assets/img0.png';
import img5 from '../../assets/img0.png';
import img6 from '../../assets/img0.png';
import img7 from '../../assets/img0.png';

const FloatingBackground = ({ children }) => {
  // Array of imported image variables
  const imageUrls = [img0, img1, img2, img3, img4, img5, img6, img7];

  // Define modes with predefined positions, animations, and sizes
  const modes = [
    {
      images: [
        {
          src: imageUrls[0],
          position: { top: '5%', left: '5%' }, // Top-left corner
          animation: 'floatY',
          width: 100, // Width in pixels
          height: 100, // Height in pixels
        },
        {
          src: imageUrls[1],
          position: { top: '30%', left: '90%' }, // Right
          animation: 'floatX',
          width: 120,
          height: 120,
        },
        {
          src: imageUrls[2],
          position: { top: '80%', left: '5%' }, // Bottom-left corner
          animation: 'floatXY',
          width: 80,
          height: 80,
        },
      ],
    },
    // ... other modes
  ];

  const [selectedMode, setSelectedMode] = useState(null);

  useEffect(() => {
    // Randomly select one of the modes
    const modeIndex = Math.floor(Math.random() * modes.length);
    setSelectedMode(modes[modeIndex]);
    console.log('Selected mode index:', modeIndex);
  }, []);

  return (
    <div className="relative w-full h-[101vh] overflow-hidden bg-slate-100">
      {/* Floating Images */}
      {selectedMode &&
        selectedMode.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Floating decoration ${index + 1}`}
            className="floating-image"
            style={{
              top: image.position.top,
              left: image.position.left,
              animationName: image.animation,
              width: `${image.width}px`,
              height: `${image.height}px`,
            }}
          />
        ))}

      {/* Content that will be displayed on top of the background */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FloatingBackground;
