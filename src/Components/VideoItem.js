import "./VideoItem.css";
import React from "react";
import { List, Image } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <List.Item className="video-item" onClick={() => onVideoSelect(video)}>
      <Image
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <List.Content>
        <List.Header>{video.snippet.title}</List.Header>
      </List.Content>
    </List.Item>
  );
};

export default VideoItem;
