class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumberPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
