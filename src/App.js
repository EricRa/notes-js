import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./comps/NavBar";
import Home from "./comps/Home";
import About from "./comps/About";
import Contact from "./comps/Contact"

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
