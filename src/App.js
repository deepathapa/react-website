import React from "react";
import Navabar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      ;
    </BrowserRouter>
  );
};
export default App;
