import React from 'react';
import '../styles/N3.css'
import natureImage from '../images/nature3.jpg';


function N3() {
  return (
    <div className="container-N3">
      <div className="background-image" style={{backgroundImage: `url(${natureImage})`}}></div>
      <div className="content-N3">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ultrices eros in cursus turpis. Morbi tristique senectus et netus et malesuada fames ac.
           Tortor posuere ac ut consequat semper viverra nam.
           Vestibulum lectus mauris ultrices eros. Morbi tristique senectus et netus.</h1>
      </div>
    </div>  
  );
}

export default N3;