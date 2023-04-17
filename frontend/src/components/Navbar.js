import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClimateStatsLogo from '../images/climatestatslogo.jpeg'; // Make sure the path to the image is correct

const Navbar = ({ openRegisterModal, openLoginModal }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <div className='homepage'>
      <Link to="/">
       <img src={ClimateStatsLogo} alt="ClimateStats" className="nav-link logo" />
      </Link>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Dropmenu
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/N1">N1</Link>
              <Link to="/N2">N2</Link>
              <Link to="/N3">N3</Link>
            </div>
          )}
        </div>
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