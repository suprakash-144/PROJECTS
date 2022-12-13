import React, { Component } from "react";

export default class Formvalidation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      Password: null,
      nameerror: "",
      passworderror: "",
    };
  }
  valid() {
    if (this.state.Password.length < 8) {
      this.setState({
        passworderror: "Length is too short",
      });
      return false;
    }
    return true;
  }
  submit() {
    this.setState({
      passworderror: "",
    });
    if (this.valid()) alert(`Name : ${this.state.Name} form submitted`);
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
        />
        <p></p>
        <input
          type="Password"
          name="Password"
          placeholder="Password"
          onChange={(e) => {
            this.setState({ Password: e.target.value });
          }}
        />
        <p style={{ color: "red", fontSize: "14px" }}>
          {this.state.passworderror}
        </p>
        <button
          onClick={() => {
            this.submit();
          }}
        >
          sunmit
        </button>
      </div>
    );
  }
}
