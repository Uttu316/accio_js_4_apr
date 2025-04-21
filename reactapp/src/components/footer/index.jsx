import { Component } from "react";
class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <footer>
        <p>Made with love by {name}</p>
      </footer>
    );
  }
}

export default Footer;
