import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClimateStatsLogo from '../images/climatestatslogo3.png';
import deleteUser from './user/DeleteUser';

// Navbar component responsible for rendering the navigation bar
const Navbar = ({ openRegisterModal, openLoginModal }) => {

  // Helper function to check if the user is logged in
  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };

  // Function to handle user logout
  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  const handleN3Click = (e) => {
    if (!isLoggedIn()) {
      e.preventDefault();
      alert("Please login to view this page.");
    }
  };
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top px-3">
      <a className="navbar-logo" href="/">
        <img src={ClimateStatsLogo} alt="ClimateStats" className="logo-image" />
      </a>
      <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Views</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="/N1">N1</a>
              <a className="dropdown-item" href="/N2">N2</a>
              <a className="dropdown-item" href="/newuservisual" onClick={handleN3Click}>N3</a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
        {isLoggedIn() ? (
          <React.Fragment>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={deleteUser}>Delete Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={logout}>Logout</a>
            </li>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={openLoginModal}>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={openRegisterModal}>Register</a>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;