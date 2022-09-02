import React, { Component } from "react";
import Game from "./Game";
import OtherGame from "./OtherGame";
import Rando from "./Rando";

export default class App extends Component {
  render() {
    return (
      <div>
        <Rando maxNum={7} />
      </div>
    );
  }
}
