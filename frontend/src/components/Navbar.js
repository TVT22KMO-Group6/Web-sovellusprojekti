import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClimateStatsLogo from '../images/climatestatslogo.jpeg';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ openRegisterModal, openLoginModal }) => {

  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  return (
    <div className="navbar">
      <div className='homepage'>
      <Link to="/" className="nav-link logo">
       <img src={ClimateStatsLogo} alt="ClimateStats" className="logo-image" />
      </Link>
        <Dropdown className="custom-dropdown">
          <Dropdown.Toggle id="dropdown-basic">
            Views
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/N1">N1</Dropdown.Item>
            <Dropdown.Item as={Link} to="/N2">N2</Dropdown.Item>
            <Dropdown.Item as={Link} to="/N3">N3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="nav-links">
  {isLoggedIn() ? (
    <button className="nav-link-button" onClick={logout}>Logout</button>
  ) : (
    <React.Fragment>
      <button className="nav-link-button" onClick={openLoginModal}>Login</button>
      <button className="nav-link-button" onClick={openRegisterModal}>Register</button>
    </React.Fragment>
  )}
</div>
    </div>
  );
};

export default Navbar;