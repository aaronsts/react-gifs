/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    const url = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={url} className="gif" alt="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
