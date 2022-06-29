import React from "react";
import { Navbar, Button, Group, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "../card";
import { CRow } from "@coreui/react";

const home = () => {
  return (
    <div className="App">
      <NavBar />
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <Cards />
        <Cards />
        <Cards />
      </CRow>
    </div>
  );
};
function NavBar() {
  return (
    <div className="navBar">
      <Navbar className="justify-content-center" bg="info" variant="dark">
        <Navbar.Brand>site</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default home;
