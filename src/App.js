import React from "react";
import { Navbar, Button, Group, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./components/card";
import { CRow } from "@coreui/react";
import Home from "./components/home";

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};
export default App;
