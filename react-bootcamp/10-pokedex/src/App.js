import React, { Component } from "react";
import Pokedex from "./components/Pokedex/Pokedex";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <Pokedex />
      </div>
    );
  }
}
