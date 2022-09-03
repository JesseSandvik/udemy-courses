import React, { Component } from 'react';

import Button from './Button';
import Die from './Die';

export default class DiceGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDie: 1,
      secondDie: 1,
      isRolling: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    this.setState({ isRolling: true });
    const firstDieRoll = Math.floor(Math.random() * 6) + 1;
    const secondDieRoll = Math.floor(Math.random() * 6) + 1;

    this.setState({
      firstDie: firstDieRoll,
      secondDie: secondDieRoll,
    });

    this.setState({ isRolling: false });
  }
  render() {
    return (
      <div className='DiceGame'>
        <div className='DiceGame-dice'>
          <Die die={this.state.firstDie} />
          <Die die={this.state.secondDie} />
        </div>
        <Button disabled={this.state.isRolling} onClick={this.rollDice}>{this.state.isRolling ? "rolling..." : "roll dice!"}</Button>
      </div>
    )
  }
}
