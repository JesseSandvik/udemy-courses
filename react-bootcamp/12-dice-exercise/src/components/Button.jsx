import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const { children, disabled, onClick } = this.props;
    return <button disabled={disabled} onClick={onClick}>{children}</button>
  }
}
