import React, { Component } from "react";

export default class Rando extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      const rand = Math.floor(Math.random() * this.props.maxNum);
      this.setState({ num: rand });
    }, 1000);
  }
  render() {
    return <h1>{this.state.num}</h1>;
  }
}
