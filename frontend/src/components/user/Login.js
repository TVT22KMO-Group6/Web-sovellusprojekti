import React, { useState } from 'react';
import '../../styles/Login.css';

// Login component
const Login = ({ isOpen, closeModal }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Do not render if the modal is not open
  if (!isOpen) {
    return null;
  }

  // Handles form submission to log in the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API request to log in the user
    const response = await fetch(process.env.REACT_APP_LOGIN_USER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      // Save the JWT token and redirect to the dashboard
      localStorage.setItem('token', data.jwt);
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Login</h1>
        <form className="modal-form" onSubmit={handleSubmit}>
          {/* Username input */}
            <h4 className="label">Username *</h4>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="modal-input" 
                aria-label="Username *"
                required
                />

            {/* Password input */}   
            <h4 className="label">Password *</h4>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modal-input"
                aria-label="Password *"
                required
                />
            {/* Button container */}
            <div className="button-container">
                <button type="submit" className="modal-button">Login</button>
                <button type="button" className="modal-button" onClick={closeModal}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;