import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Reasturantcreate from "./component/Reasturantcreate";
import Reasturantdetails from "./component/Reasturantdetails";
import Reasturantlist from "./component/Reasturantlist";
import Reasturantsearch from "./component/Reasturantsearch";
import Reasturantupdate from "./component/Reasturantupdate";
import Home from "./component/home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Restro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to="">Home</Link>
                </Nav.Link>
                <Nav.Link href="#list">
                  <Link to="/list">List</Link>
                </Nav.Link>
                <Nav.Link href="#create">
                  <Link to="/create">create</Link>
                </Nav.Link>
                <Nav.Link href="#details">
                  <Link to="/details">Details</Link>
                </Nav.Link>
                <Nav.Link href="#search">
                  <Link to="/search">search</Link>
                </Nav.Link>
                <Nav.Link href="#update">
                  <Link to="/update">update</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Reasturantlist />} />
          <Route path="/create" element={<Reasturantcreate />} />
          <Route path="/details" element={<Reasturantdetails />} />
          <Route path="/search" element={<Reasturantsearch />} />
          <Route path="/update" element={<Reasturantupdate />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
