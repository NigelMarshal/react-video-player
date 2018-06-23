import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

import { API_KEY } from "../keys";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    //Youtube API search function
    YTSearch({ key: API_KEY, term: "overwatch" }, videos => {
      this.setState({ videos });
      //this.setState({videos: videos})
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
