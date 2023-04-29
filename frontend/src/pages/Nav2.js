import React from 'react';
import natureImage from '../images/nature2.jpg';
import Visual4 from '../components/chart/Visual4Chart';
import Visual5 from '../components/chart/Visual5Chart';


function N2() {
  return (
    <main role="main" className="container-fluid">
      <div className="background-image" style={{backgroundImage: `url(${natureImage})`}}></div>
      <div className="content-wrapper">
      <div className="content-N2">
        <h1>CO<sub>2</sub> emissions by country</h1>
      </div>
      <div className="visual4-container">
      <Visual4 />
      </div>
      <div className="content-N2">
        <h1>CO<sub>2</sub> emissions by sectors</h1>
      </div>
      <div className="visual5-container">
        <Visual5 />
      </div>
    </div>
    </main>  
  );
}

export default N2;