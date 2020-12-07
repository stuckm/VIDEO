import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid } from "semantic-ui-react";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.handleSearch("React.js");
  }

  handleSearch = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container>
        <SearchBar handleSearch={this.handleSearch} />
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={11}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={5}>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
