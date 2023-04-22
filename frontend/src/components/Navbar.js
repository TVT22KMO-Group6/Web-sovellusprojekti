import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClimateStatsLogo from '../images/climatestatslogo2.png';
import deleteUser from './user/DeleteUser';

const Navbar = ({ openRegisterModal, openLoginModal }) => {

  const isLoggedIn = () => {
    return localStorage.getItem('token') !== null;
  };

  const logout = () => {
    localStorage.removeItem('token');
    window.location.reload(false);
  };
  
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top px-3">
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
              <a className="dropdown-item" href="/N3">N3</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
        {isLoggedIn() ? (
          <React.Fragment>
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
    {/*<div className="navbar">
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
  </div>*/}
    </nav>
  );
};

export default Navbar;