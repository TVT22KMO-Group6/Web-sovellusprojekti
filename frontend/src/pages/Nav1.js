import React from 'react';
import '../styles/N1.css';
import natureImage from '../images/nature1.jpg';
import Visual1 from '../components/chart/Visual1Chart';
import Visual2 from '../components/chart/Visual2Chart';
import Visual3 from '../components/chart/Visual3Chart';

function N1() {
  return (
    <main role="main" className="container-fluid">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="content-wrapper">
        <div className="visual1-container">
          <Visual1 />
        </div>
        <div className="visual2-container">
          <Visual2 />
        </div>
        <div className="visual3-container">
          <Visual3 />
        </div>
      </div>
    </main>
  );
}

export default N1;
