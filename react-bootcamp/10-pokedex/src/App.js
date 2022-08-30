import React, { Component } from "react";
import PokeCard from "./components/PokeCard";

export default class App extends Component {
  render() {
    return (
      <div id="App">
        <PokeCard id={4} name="Charmander" type="Fire" experience={62} />
      </div>
    );
  }
}
