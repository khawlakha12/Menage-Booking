import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./pages/Contact";
import Reservation from "./pages/Reservation";
import Blog from "./pages/Blog";
import About from "./pages/About";
import "./App.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
