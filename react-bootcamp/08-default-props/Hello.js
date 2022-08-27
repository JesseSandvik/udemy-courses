class Hello extends React.Component {
  // Current React version(s) no longer include PropTypes which will have to be installed as a dependency.
  // static defaultProps = {
  //   from: "Anonymous",
  // };
  render() {
    const { bangs, to, from } = this.props;
    const bangsToRender = "!".repeat(bangs);
    return (
      <div>
        <h1>
          Hi {to} from {from ? from : "Anonymous"}
          {bangsToRender}
        </h1>
      </div>
    );
  }
}
