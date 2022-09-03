import React, { Component } from 'react';

import Button from './Button';
import Die from './Die';

export default class DiceGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDie: 1,
      secondDie: 1,
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    const firstDieRoll = Math.floor(Math.random() * 12) + 1;
    const secondDieRoll = Math.floor(Math.random() * 12) + 1;
    this.setState({
      firstDie: firstDieRoll,
      secondDie: secondDieRoll,
    });
  }
  render() {
    return (
      <div className='DiceGame'>
        <div>
          <Die die={this.state.firstDie} />
          <Die die={this.state.secondDie} />
        </div>
        <Button />
      </div>
    )
  }
}
