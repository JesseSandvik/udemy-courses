import React, { Component } from "react";

import DiceGame from "./components/DiceGame";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <DiceGame />
      </div>
    );
  }
}
