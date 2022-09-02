import React, { Component } from "react";
import Button from "./Button";
import BrokenButton from "./BrokenButton";
import Game from "./Game";
import OtherGame from "./OtherGame";
import Rando from "./Rando";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrokenButton />
      </div>
    );
  }
}
