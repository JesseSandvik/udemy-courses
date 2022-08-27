class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Loops Demo</h1>
        <Friend
          name="Ghostie"
          hobbies={[
            "sleeping",
            "boofing",
            "playing",
            "going for walks",
            "belly rubs",
          ]}
        />
        <Friend
          name="Akasha"
          hobbies={[
            "sleeping",
            "meowing",
            "playing",
            "rubbing against everything",
            "also belly rubs",
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
