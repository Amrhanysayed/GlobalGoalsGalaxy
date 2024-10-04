import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

function VideoSection({ videoUrl, videoWidth = 560, videoHeight = 315, title = "Watch this video" }) {
  return (
    <div className="text-center mt-2">
      <h2 
        className="text-8xl mb-2 font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 ease-in-out hover:from-blue-500 hover:to-green-400"
      >
        {title}
      </h2>
      <YouTubeEmbed id={videoUrl} width={videoWidth} height={videoHeight} />
    </div>
  );
}

export default VideoSection;
