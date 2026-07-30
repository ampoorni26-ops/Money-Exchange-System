import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          💱 Money Exchange System
        </Link>
      </h2>

      <ul className="nav-links">
        <li><Link to="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>Login</Link></li>
        <li><Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;