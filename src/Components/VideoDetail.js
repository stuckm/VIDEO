import React from "react";
import { Segment, Header, Embed } from "semantic-ui-react";

const vidoeDetail = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>;
  }
  return (
    <Segment>
      <Embed id={video.id.videoId} source="youtube" />
      <Header as="h4">{video.snippet.title}</Header>
      <p>{video.snippet.description}</p>
    </Segment>
  );
};

export default vidoeDetail;
