import React from "react";
import VideoItem from "./VideoItem";
import { List } from "semantic-ui-react";

const videoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <List divided relaxed>
      {renderedList}
    </List>
  );
};

export default videoList;
