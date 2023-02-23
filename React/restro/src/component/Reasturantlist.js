import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
export default class Reasturantlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Resturant").then((res) => {
      res.json().then((result) => {
        this.setState({ list: result });
      });
    });
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Reasturant List </h1>
          {this.state.list ? (
            <div>
              <Container>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>address</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((item, i) => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Container>
            </div>
          ) : (
            <p>Please Wait..</p>
          )}
        </Container>
      </div>
    );
  }
}
