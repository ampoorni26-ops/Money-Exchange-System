import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        navigate('/dashboard'); // Redirect user straight to Dashboard!
      } else  {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setMessage("Server error. Make sure backend is running on port 5000.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔑 Welcome Back</h2>
        <p>Login to manage your currency exchanges</p>

        {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;