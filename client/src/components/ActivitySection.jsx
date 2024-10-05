import React, { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';

function ActivitySection({
  activityName,
  activityUrl,
  enlargedWidth = 1000,
  enlargedHeight = (1000 * 9) / 16,
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleToggleSize = () => {
    setIsEnlarged((prevState) => !prevState);
  };

  // Define normal and enlarged dimensions
  const normalDimensions = { width: '854px', height: `${(854 * 9 / 16)}px`} ;
  const enlargedDimensions = {
    width: `${enlargedWidth}px`,
    height: `${enlargedHeight}px`,
  };

  return (
    <div className="activity-section text-center">
      <h2
        className="text-4xl font-bold bg-gradient-to-r my-4 py-2 from-green-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out hover:from-blue-500 hover:to-green-400 text-center"
      >
        {activityName}
      </h2>    
        <div className="iframe-container relative inline-block">
        <iframe
          src={activityUrl}
          allow="fullscreen"
          title={activityName}
          style={{
            ...(!isEnlarged ? normalDimensions : enlargedDimensions),
            border: 'none',
          }}
        ></iframe>
        <button
          onClick={handleToggleSize}
          className="absolute top-0 right-0 m-2 p-2 bg-gray-800 bg-opacity-60 text-white rounded"
        >
          {isEnlarged ? <FaCompress size={24} /> : <FaExpand size={24} />}
        </button>
      </div>
    </div>
  );
}

export default ActivitySection;
