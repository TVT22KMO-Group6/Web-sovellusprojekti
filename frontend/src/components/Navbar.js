import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClimateStatsLogo from '../images/climatestatslogo.jpeg'; // Make sure the path to the image is correct

const Navbar = ({ openRegisterModal, openLoginModal }) => {
  return (
    <div className="navbar">
      <div className='homepage'>
      <Link to="/">
       <img src={ClimateStatsLogo} alt="ClimateStats" className="nav-link logo" />
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
