import Preact from "preact";
import "./main.sass";

import Button from "./Button";

class App extends Preact.Component {
  constructor() {
    super();
    this.state = {
      text: ["Hello world!"],
    };
  }

  onClick = () => {
    const { text } = this.state;

    text.push("Hello world!");

    this.setState({
      text,
    });
  }

  render() {
    return (
      <div>
        <strong className="text-center text-blue-500">{ this.state.text.join(" ") }</strong>
        <br />
        <Button onClick={this.onClick}>Hi</Button>
      </div>
    );
  }
}

Preact.render(<App />, document.getElementById("app"));
