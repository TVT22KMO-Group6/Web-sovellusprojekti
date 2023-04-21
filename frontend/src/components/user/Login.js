import React, { useState } from 'react';
import '../../styles/Login.css';

const LoginModal = ({ isOpen, closeModal }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_LOGIN_USER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.jwt);
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Login</h1>
        <form className="modal-form" onSubmit={handleSubmit}>
            <h4 className="label">Username *</h4>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="modal-input" required />
            <h4 className="label">Password *</h4>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="modal-input" required />
            <div className="button-container">
                <button type="submit" className="modal-button">Login</button>
                <button type="button" className="modal-button" onClick={closeModal}>Cancel</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;