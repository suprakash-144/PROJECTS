import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      Email: null,
    };
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <div>
        <h1>form</h1>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          onChange={(e) => {
            this.setState({ Name: e.target.value });
          }}
        ></input>
        <br></br>
        <input
          type="Email"
          name="Email"
          placeholder="email"
          onChange={(e) => {
            this.setState({ Email: e.target.value });
          }}
        ></input>
        <br></br>
        <button
          onClick={() => {
            this.submit();
          }}
        >
          {" "}
          sunmit
        </button>
      </div>
    );
  }
}
