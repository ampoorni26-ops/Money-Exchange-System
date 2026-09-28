import React from "react"; // 👈 Added React import here
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  const handleLogout = () => {
    // Clear user session from storage
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          💱 Money Exchange System
        </Link>
      </h2>

      <ul className="nav-links">
        <li>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
            About
          </Link>
        </li>

        {isLoggedIn ? (
          <>
            <li>
              <Link to="/dashboard" style={{ color: "inherit", textDecoration: "none" }}>
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "1px solid currentColor",
                  color: "inherit",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;