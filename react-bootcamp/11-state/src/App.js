import React, { Component } from "react";
import Button from "./Button";
import BrokenButton from "./BrokenButton";
import BrokenButton2 from "./BrokenButton2";
import Game from "./Game";
import OtherGame from "./OtherGame";
import Rando from "./Rando";
import Clicker from "./Clicker";

export default class App extends Component {
  render() {
    return (
      <div>
        <Clicker />
      </div>
    );
  }
}
