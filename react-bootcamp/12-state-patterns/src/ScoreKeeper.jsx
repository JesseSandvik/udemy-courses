import React, { Component } from 'react'

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0, count: 0 };
        this.singleKill = this.singleKill.bind(this);
        this.tripleKill = this.tripleKill.bind(this);
    }
    singleKill() {
        this.setState({ score: this.state.score + 1 });
    }
    tripleKill() {
        this.setState((state) => {return { score: state.score + 1 } });
        this.setState((state) => {return { score: state.score + 1 } });
        this.setState((state) => {return { score: state.score + 1 } });
    }
    incrementCounter(prevState) {
        return { count: prevState.count + 3};
    }
  render() {
    return (
        <div>
            <h1>Score is: {this.state.score}</h1>
            <h1>Count is: {this.state.count}</h1>
            <button onClick={this.singleKill}>Single kill!</button>
            <button onClick={this.tripleKill}>Single kill!</button>
            <button onClick={() => this.setState(this.incrementCounter)}>Single kill!</button>
        </div>
    )
  }
}

export default ScoreKeeper;