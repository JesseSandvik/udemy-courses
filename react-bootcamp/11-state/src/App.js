import React, { Component } from "react";
import Game from "./Game";
import OtherGame from "./OtherGame";

export default class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <OtherGame />
      </div>
    );
  }
}
