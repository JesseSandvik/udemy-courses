class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My image</h1>
        <img alt="sample photo" src="https://unsplash.com/photos/9G1kvibCXT4" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
