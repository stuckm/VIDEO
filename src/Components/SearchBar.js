import React from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchBar extends React.Component {
  state = { query: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.query);
    this.setState({ query: "" });
  };

  onEventChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <Segment className="search-bar">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Search Videos</label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.onEventChange}
            ></input>
          </Form.Field>
        </Form>
      </Segment>
    );
  }
}

export default SearchBar;
