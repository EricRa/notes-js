import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./comps/NavBar";

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
