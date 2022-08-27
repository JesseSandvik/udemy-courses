function getRandomSlotResult(slots) {
  return slots[Math.floor(Math.random() * slots.length)];
}

class SlotMachine extends React.Component {
  render() {
    const { slots } = this.props;
    const slotOne = getRandomSlotResult(slots);
    const slotTwo = getRandomSlotResult(slots);
    const slotThree = getRandomSlotResult(slots);
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
