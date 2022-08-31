import React, { Component } from 'react'

export default class OtherGame extends Component {
    state = {
        score: 99,
        gameOver: false,
    };
  render() {
    return (
      <div>
        <h1>Your score is: {this.state.score}</h1>
      </div>
    )
  }
}
