class SlotMachine extends React.Component {
  render() {
    const { slotOne, slotTwo, slotThree } = this.props;
    let messageToRender = "";

    if (slotOne === slotTwo && slotTwo === slotThree) {
      messageToRender = "You win!";
    } else {
      messageToRender = "You lose!";
    }

    return (
      <div>
        <p>
          {slotOne} {slotTwo} {slotThree}
        </p>
        <p>{messageToRender}</p>
      </div>
    );
  }
}
