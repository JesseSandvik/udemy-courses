function getMood() {
  const moods = ["Angry", "Hungry", "Sleepy", "Relaxed", "Stressed"];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
