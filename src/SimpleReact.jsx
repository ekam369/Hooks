import React, { Component } from "react";
class SimpleReact extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  componentDidUpdate() {
    console.log('Update')
    document.title = `You have clicked ${this.state.counter} times`
  }

  componentDidMount() {
      console.log('Did mount')
      document.title = `You have clicked ${this.state.counter} times`
  }

  render() {
    return (
      <div>
        <p>{`You have clicked ${this.state.counter} times`}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default SimpleReact;
