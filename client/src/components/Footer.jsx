import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Project Info */}
        <div className="footer-section">
          <h3>💱 Money Exchange System</h3>
          <p>
            A secure and fast peer-to-peer micro-remittance platform built for easy currency exchanges.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Section 3: Team Credits */}
        <div className="footer-section">
          <h4>Team Credits</h4>
          <p><strong>Project Lead:</strong> Poornima</p>
          <p><strong>Team Members:</strong> Jeevitha, Yashika</p>
          <p>College Micro Project</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Money Exchange System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;