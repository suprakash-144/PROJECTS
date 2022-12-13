import React, { Component } from "react";

export default class lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: null,
      should: null,
    };
  }
  componentDidUpdate() {
    if (this.state.should == null) {
      this.setState({ should: "Welcome to the site" }, () => {
        console.warn("update");
      });
    }
  }
  clickme() {
    this.setState({ first: "done" }, () => {
      console.warn("clickme");
    });
  }
  render() {
    return (
      <div>
        <div> {this.state.should}</div>
        <button
          onClick={() => {
            this.clickme();
          }}
        >
          Here
        </button>
      </div>
    );
  }
}
