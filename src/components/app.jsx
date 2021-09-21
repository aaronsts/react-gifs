/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

// Import components
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectGifId: "xT9IgDEI1iZyb2wqo8",
    };

    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${query}&limit=10`;
    fetch(giphEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.map((giph) => giph.id);
        this.setState({
          gifs: gifs,
        });
      });
  }
  selectGif(id) {
    this.setState({
      selectGifId: id,
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;