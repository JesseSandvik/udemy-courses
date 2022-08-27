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
    const paragraphStyle = {
      backgroundColor: "purple",
      fontSize: "50px",
    };

    if (slotOne === slotTwo && slotTwo === slotThree) {
      messageToRender = "You win!";
    } else {
      messageToRender = "You lose!";
    }

    return (
      <div className="SlotMachine">
        <p style={paragraphStyle}>
          {slotOne} {slotTwo} {slotThree}
        </p>
        <p
          style={
            messageToRender === "You win!"
              ? { color: "green" }
              : { color: "red" }
          }
        >
          {messageToRender}
        </p>
      </div>
    );
  }
}
