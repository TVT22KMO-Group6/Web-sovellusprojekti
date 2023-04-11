import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ openRegisterModal, openLoginModal }) => {
  return (
    <div className="navbar">
      <div className='homepage'>
        <Link to="/" className="nav-link">
          Group6
        </Link>
      </div>
      <div className="nav-links">
        <button className="nav-link" onClick={openLoginModal}>
          Login
        </button>
        <button className="nav-link" onClick={openRegisterModal}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;