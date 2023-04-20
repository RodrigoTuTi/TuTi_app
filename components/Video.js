import React from "react";
import ReactPlayer from "react-player";

const Video = ({ className }) => (
  <ReactPlayer
    url="https://fb.watch/j1ccpmQAKY/"
    className={className}
    playing
    width="100%"
    controls={true}
    style={{display:"flex"}}
    muted
  />
);

export default Video;