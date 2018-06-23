import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

import { API_KEY } from "../keys";
// Create a new component to produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
//Take this component's generated HTML and dump it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"));
