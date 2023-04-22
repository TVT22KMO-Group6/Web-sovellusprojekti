import React, { useState } from 'react';
import '../styles/N3.css';
import natureImage from '../images/nature3.jpg';
import Visual1 from '../components/chart/Visual1Chart';
import Visual2 from '../components/chart/Visual2Chart';
import Visual4 from '../components/chart/Visual4Chart';
import Visual5 from '../components/chart/Visual5Chart';

function N3() {
  const [visual1Visible, setVisual1Visible] = useState(true);
  const [visual2Visible, setVisual2Visible] = useState(true);
  const [visual4Visible, setVisual4Visible] = useState(true);
  const [visual5Visible, setVisual5Visible] = useState(true);

  const handleVisual1Change = (event) => {
    setVisual1Visible(event.target.checked);
  }

  const handleVisual2Change = (event) => {
    setVisual2Visible(event.target.checked);
  }

  const handleVisual4Change = (event) => {
    setVisual4Visible(event.target.checked);
  }

  const handleVisual5Change = (event) => {
    setVisual5Visible(event.target.checked);
  }

  return (
    <main role="main" class="container-fluid">
      <div className="background-image" style={{ backgroundImage: `url(${natureImage})` }}></div>
      <div className="content-wrapper">
        <div className="content-N3">
          <h1>test1</h1>
        </div>
        <div className="visual-checkboxes">
          <label>
            <input type="checkbox" checked={visual1Visible} onChange={handleVisual1Change} />
            Visual1
          </label>
          <label>
            <input type="checkbox" checked={visual2Visible} onChange={handleVisual2Change} />
            Visual2
          </label>
          <label>
            <input type="checkbox" checked={visual4Visible} onChange={handleVisual4Change} />
            Visual4
          </label>
          <label>
            <input type="checkbox" checked={visual5Visible} onChange={handleVisual5Change} />
            Visual5
          </label>
        </div>
        <div className="content-N3">
        </div>
        {visual1Visible && <div className="visual1-container"><Visual1 /></div>}
        {visual2Visible && <div className="visual2-container"><Visual2 /></div>}
        {visual4Visible && <div className="visual4-container"><Visual4 /></div>}
        {visual5Visible && <div className="visual5-container"><Visual5 /></div>}
      </div>
    </main>
  );
}

export default N3;
