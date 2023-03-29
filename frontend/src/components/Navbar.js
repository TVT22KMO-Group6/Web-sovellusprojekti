import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-link">
        Group6
      </Link>
      <div className="nav-links">
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
