import React from 'react';

const VideoListItem = ({video}) => { //{video} is shortcut - this object has a property called video, please grab that video and assign it to variable called video
  console.log(video);
  return <li>Video</li>
};

// const VideoListItem = (props) => {
//   const video = props.video;
//   return <li>Video</li>
// };

export default VideoListItem;