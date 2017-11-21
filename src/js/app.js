import React from "react";
import ReactDOM from "react-dom";
import "./main.sass";

class App extends React.Component {
  render() {
    return (
      <div>
        <strong className="text-center text-blue-500">Hello world!</strong>
      </div>
    );
  }
}

ReactDOM.render( <App />, document.getElementById( "app" ) );
