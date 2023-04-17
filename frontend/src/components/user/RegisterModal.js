import React, { useState } from 'react';
import '../../styles/RegisterModal.css';

const RegisterModal = ({ isOpen, closeModal }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.REACT_APP_REGISTER_USER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.status === 201) {
        alert('Registration successful!');
        setUsername('');
        setPassword('');
        closeModal();
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Register</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <h4 className="label">Username *</h4>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="modal-input"
            required
          />

          <h4 className="label">Password *</h4>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="modal-input"
            required
          />

          <div className="button-container">
            <button type="submit" className="modal-button">Register</button>
            <button type="button" className="modal-button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
