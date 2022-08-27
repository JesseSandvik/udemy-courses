class HelloClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>This is a class component.</p>
      </div>
    );
  }
}

function HelloFunctionalComponent() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

ReactDOM.render(<HelloFunctionalComponent />, document.getElementById("root"));
