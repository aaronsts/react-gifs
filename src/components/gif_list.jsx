/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif) => (
        <Gif id={gif} key={gif} selectGif={props.selectGif} />
      ))}
    </div>
  );
};

export default GifList;
