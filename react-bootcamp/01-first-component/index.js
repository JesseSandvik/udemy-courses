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

function HelloFunctionComponent() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a function component.</p>
    </div>
  );
}

ReactDOM.render(<HelloFunctionComponent />, document.getElementById("root"));
