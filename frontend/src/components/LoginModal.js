import React from 'react';
import '../styles/LoginModal.css';

const LoginModal = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1>Login</h1>
        <form className="modal-form">
            <h4 className="label">Username *</h4>
                <input type="text" username="Username" className="modal-input" required />
            <h4 className="label">Password *</h4>
                <input type="password" password="Password" className="modal-input" required />
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