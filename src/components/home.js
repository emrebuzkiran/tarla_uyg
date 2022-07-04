import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./card";
import { CRow } from "@coreui/react";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
        <Cards />
        <Cards />
        <Cards />
        <collapse />
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

export default Home;
