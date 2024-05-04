// VideoTemplate.js
import React from 'react';

const VideoTemplate = ({videos}) => {
  

  return (
    <div className='flex flex-col justify-center items-center gap-5 overflow-x-scroll p-5'>
      
  <>
    {videos.map((video, index) => (
      <iframe
    key={index}
    width="80%"
    height="200"
    src={video.src}
    title={video.title}
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
    ))}
  </>
    </div>
  );
};

export default VideoTemplate;
