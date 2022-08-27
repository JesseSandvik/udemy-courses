class App extends React.Component {
  render() {
    const slots = ["x", "q", "r", "t", "z", "p", "o"];
    return (
      <div>
        <h1>Slot Machines!</h1>
        <SlotMachine slots={slots} />
        <SlotMachine slots={slots} />
        <SlotMachine slots={slots} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
