import React, { Component } from 'react'

export default class BrokenButton2 extends Component {
        state = { clicked: false };
    handleClicked = (event) => {
        this.setState({ clicked: !this.state.clicked });
    }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked!" : "UnClicked..."}</h1>
        <button onClick={this.handleClicked}>click me</button>
      </div>
    )
  }
}
