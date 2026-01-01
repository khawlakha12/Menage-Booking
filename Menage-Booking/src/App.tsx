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
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
