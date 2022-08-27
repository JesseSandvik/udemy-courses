class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>This is a new element</p>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
