import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { children, isRolling, onClick } = this.props;
    return <button disabled={isRolling} onClick={onClick}>{children}</button>
  }
}
