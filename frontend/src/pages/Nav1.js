import React from 'react';
import '../styles/N1.css';
import natureImage from '../images/nature1.jpg';
import Visual2 from '../components/Visual2';

function N1() {
  return (
    <div className="container-N1">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="content-wrapper">
        <div className="content-N1">
        <h2>Ilmakehän CO<sub>2</sub>-pitoisuuksia ja tapahtumia</h2>
        </div>
        <div className="visual2-container">
          <Visual2 />
        </div>
      </div>
    </div>
  );
}

export default N1;
