import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/Rout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  );
};

export default App;
