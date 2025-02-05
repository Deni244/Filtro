import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import './App.css'

function App() {

  return (
    <>
    <Router>
      
      <Routes>
        <Route path="/Filtro" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
      
    </>
  )
}

export default App
