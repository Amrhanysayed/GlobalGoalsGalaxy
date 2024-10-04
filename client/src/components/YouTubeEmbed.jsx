import React from 'react';

function YouTubeEmbed({ id, width = 560, height = 315 }) {
  const videoId = id.split('v=')[1]; // Extract the part after "v="
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe
        width={width}
        height={height}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;