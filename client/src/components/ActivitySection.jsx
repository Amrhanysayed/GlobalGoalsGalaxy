import React, { useState } from 'react';
import { FaExpand, FaCompress } from 'react-icons/fa';

function ActivitySection({
  activityName,
  activityUrl,
  enlargedWidth = 1200,
  enlargedHeight = 800,
}) {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleToggleSize = () => {
    setIsEnlarged((prevState) => !prevState);
  };

  // Define normal and enlarged dimensions
  const normalDimensions = { width: '854px', height: '480px' };
  const enlargedDimensions = {
    width: `${enlargedWidth}px`,
    height: `${enlargedHeight}px`,
  };

  return (
    <div className="activity-section text-center">
      <h1 className="text-3xl font-bold mb-4">{activityName}</h1>
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
