class Hello extends React.Component {
  render() {
    const { bangs, to, from } = this.props;
    const bangsToRender = "!".repeat(bangs);
    return (
      <div>
        <h1>
          Hi {to} from {from}
          {bangsToRender}
        </h1>
      </div>
    );
  }
}
