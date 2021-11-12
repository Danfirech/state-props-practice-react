import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super();
    this.state = { color: "red" };
  }

  render() {
    return <h1>{this.state.color}</h1>;
  }
}

export default Demo;
