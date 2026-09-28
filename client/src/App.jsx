import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from './components/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Dashboard from './pages/Dashboard'; // Import Dashboard

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;