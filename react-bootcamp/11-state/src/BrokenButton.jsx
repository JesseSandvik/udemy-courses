import React, { Component } from 'react'

export default class BrokenButton extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClicked = this.handleClicked.bind(this);
    }
    handleClicked(event) {
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
