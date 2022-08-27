class App extends React.Component {
  render() {
    const slotOne = "x";
    const slotTwo = "y";
    const slotThree = "z";
    return (
      <div>
        <h1>Slot Machines!</h1>
        <SlotMachine
          slotOne={slotOne}
          slotTwo={slotTwo}
          slotThree={slotThree}
        />
        <SlotMachine
          slotOne={slotThree}
          slotTwo={slotThree}
          slotThree={slotThree}
        />
        <SlotMachine
          slotOne={slotThree}
          slotTwo={slotThree}
          slotThree={slotOne}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
