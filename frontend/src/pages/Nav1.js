import React from 'react';
import '../styles/N1.css';
import natureImage from '../images/nature1.jpg';
import Visual1 from '../components/chart/Visual1Chart';
import Visual2 from '../components/chart/Visual2';

function N1() {
  return (
    <div className="container-N1">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="content-wrapper">
      <div className="content-N1">
      <h1>Global historical surface temperature anomalies from January 1850 onwards</h1>
        </div>
        <div className="visual1-container">
          <Visual1 />
        </div>
        <div className="content-N1">
        <h1>Atmospheric CO<sub>2</sub> concentrations from Mauna Loa measurements starting 1958 and
        Antarctic Ice Core records of atmospheric CO2 ratios</h1>
        </div>
        <div className="visual2-container">
          <Visual2 />
        </div>
      </div>
    </div>
  );
}

export default N1;
