import React from "react";
import { Navbar, Button, Group, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./components/card";
import { CRow } from "@coreui/react";
import bugday from "./components/pages/bugday";
import mısır from "./components/pages/mısır";
import aycicek from "./components/pages/aycicek";
import { Route, Link, Routes } from "react-router-dom";
import home from "./components/pages/home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={home} />
        <Route exact path="/mısır" component={mısır} />
        <Route exact path="/aycicek" component={aycicek} />
        <Route exact path="/bugday" component={bugday} />
      </Routes>
    </div>
  );
};
export default App;
