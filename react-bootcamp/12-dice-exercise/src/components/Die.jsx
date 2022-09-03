import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

export default class Die extends Component {
  render() {
    const { die } = this.props;
    return (
      <div className='Die'>
        {die === 1 && <FontAwesomeIcon icon={faDiceOne} />}
        {die === 2 && <FontAwesomeIcon icon={faDiceTwo} />}
        {die === 3 && <FontAwesomeIcon icon={faDiceThree} />}
        {die === 4 && <FontAwesomeIcon icon={faDiceFour} />}
        {die === 5 && <FontAwesomeIcon icon={faDiceFive} />}
        {die === 6 && <FontAwesomeIcon icon={faDiceSix} />}
      </div>
    )
  }
}
