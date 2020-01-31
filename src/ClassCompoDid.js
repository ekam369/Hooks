import React, { Component } from "react";
class ClassCompoDid extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("Mount");
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log("Update");
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ClassCompoDid;
