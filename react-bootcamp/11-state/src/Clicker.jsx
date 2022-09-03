import React, { Component } from 'react'

export default class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }
    getRandomNumber() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        this.setState({ number: randomNumber });
    }
  render() {
    return (
      <div>
        <h1>Clicker!</h1>
        {this.state.number === 7 ? <h1>You win!</h1> : (
            <div>
            <button onClick={this.getRandomNumber}>Get Random Number</button>
            <p>{this.state.number}</p>
            </div>
        )}
      </div>
    )
  }
}
