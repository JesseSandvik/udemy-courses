function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumberPicker extends React.Component {
  render() {
    const number = getRandomNumber();
    let message;

    if (number === 7) {
      message = (
        <div>
          <h2>Congrats! You won!</h2>
          <img src="https://media.giphy.com/media/l3nSQSlcI2cZvxsSQ/giphy.gif" />
        </div>
      );
    } else {
      message = <p>Sorry, you lose...</p>;
    }

    return (
      <div>
        <h1>Your number is {number}</h1>
        {message}
      </div>
    );
  }
}
