import React, { Component } from "react";
// import ReactDOM from "react-dom";
class statechange extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  increment() {
    // set state is a async function
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <div>count : {this.state.count}</div>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default statechange;
