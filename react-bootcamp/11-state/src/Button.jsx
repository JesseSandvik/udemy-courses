import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const handleOnClick = event => {
        console.log({ event });
    }
    return <button onClick={handleOnClick}>click me</button>
  }
}
