import React from 'react';
import '../styles/N1.css';
import natureImage from '../images/nature1.jpg';
import Visual1 from '../components/chart/Visual1Chart';
import Visual2 from '../components/chart/Visual2Chart';

function N1() {
  return (
    <main role="main" className="container-fluid">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="content-wrapper">
      <div className="content-N1">
          <h1>Global historical surface temperature anomalies from January 1850 onwards</h1>
          <p>Line graph of global surface temperature variations covering a period of 170 years and
              from the northern hemisphere for a period of 2000 years.<br/>
              Hadley Centre<a href="https://www.metoffice.gov.uk/hadobs/hadcrut5"> data & description.</a><br/>
              Bolin Centre<a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt"> data.</a><br/>
              Bolin Centre <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">data description.</a><br/>
              <a href="https://www.nature.com/articles/nature03265">Full study</a><br/>
          </p>
        </div>
        <div className="visual1-container">
          <Visual1 />
        </div>
        <div className="content-N1">
          <h1>Atmospheric CO<sub>2</sub> concentrations from Mauna Loa measurements starting 1958 and
          Antarctic Ice Core records of atmospheric CO<sub>2</sub> ratios covering a period of 1000 years.
          </h1><br/>
              <p>Based on Mauna Loa measurements and Antarctic ice cores.<br/>
              Mauna Loa<a href="https://gml.noaa.gov/ccgg/trends"> data.</a><br/>
              Mauna Loa <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">data description.</a><br/>
              Law Dome<a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.da"> data.</a><br/>
              Law Dome <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">data description.</a><br/>
        </p>
        <div className="visual2-container">
          <Visual2 />
        </div>
      </div>
      </div>
    </main>
  );
}

export default N1;
