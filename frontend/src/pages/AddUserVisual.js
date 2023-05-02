import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddUserVisual.css';
import Visual1Chart from '../components/chart/Visual1Chart';
import Visual2Chart from '../components/chart/Visual2Chart';
import Visual3Chart from '../components/chart/Visual3Chart';
import Visual4Chart from '../components/chart/Visual4Chart';
import Visual5Chart from '../components/chart/Visual5Chart';

// AddUserVisual component allows users to create custom views with selected visuals
export default function AddUserVisual() {
  // State variables to manage the visibility and data of each visual
  const [showVisual1, setShowVisual1] = useState(false);
  const [showVisual2, setShowVisual2] = useState(false);
  const [showVisual3, setShowVisual3] = useState(false);
  const [showVisual4, setShowVisual4] = useState(false);
  const [showVisual5, setShowVisual5] = useState(false);
  const [chartMode, setChartMode] = useState(false);
  const [visual1Data, setVisual1Data] = useState(null);
  const [visual2Data, setVisual2Data] = useState(null);
  const [visual3Data, setVisual3Data] = useState(null);
  const [visual4Data, setVisual4Data] = useState(null);
  const [visual5Data, setVisual5Data] = useState(null);

  let visualsData = {};

  // Function to save the custom view to the server
  const handleSaveView = async () => {
    getVisualsData()
    if (Object.keys(visualsData).length === 0) {
      return;
    }
    try {
      const headers = { 
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    };
      const response = await axios.post(`/api/user/visual`, {data: JSON.stringify(visualsData)}, { headers });
      window.location.href = '/dashboard';
    } catch (error) {
      console.error(error);
    }
  };

  // Function to get the data from each visual and update the visualsData object
  const getVisualsData = () => {
    let showVisuals = [showVisual1, showVisual2, showVisual3, showVisual4, showVisual5];
    let datas = [visual1Data, visual2Data, visual3Data, visual4Data, visual5Data];
    let mergedData = {};
    for (let i = 0; i < showVisuals.length; i++) {
      console.log(showVisuals[i]);
      if (!showVisuals[i]) {
        continue;
      }
      mergedData['visual' + Number(1 + i)] = datas[i] ?? "";
    }
    mergedData['chartMode'] = chartMode;
    visualsData = mergedData;
  };
  
  // Function to set the data for the specified visual
  const handleSetVisualData = (visualNumber, data) => {
    switch (visualNumber) {
      case 0:
        setChartMode(data);
        break;
      case 1:
        setVisual1Data(data);
        break;
      case 2:
        setVisual2Data(data);
        break;
      case 3:
        setVisual3Data(data);
        break;
      case 4:
        setVisual4Data(data);
        break;
      case 5:
        setVisual5Data(data);
        break;
      default:
          break;
    }
    
  };
  // Render the custom view form and the selected visuals
  return (
    <main role="main" className="container-fluid">
        <div>
          <button type="button" className="btn btn-primary" onClick={handleSaveView}>Save View</button>
        </div>
        <div className='form-check form-check-inline form-switch'>
          <input className="form-check-input" type="checkbox" name="showVisual1" id="visual1Checkbox" value="showVisual1" onChange={() => setShowVisual1(!showVisual1)}/>
          <label className="form-check-label" htmlFor="visual1Checkbox">Visual 1</label>
        </div>
        <div className='form-check form-check-inline form-switch'>
          <input className="form-check-input" type="checkbox" name="showVisual2" id="visual2Checkbox" value="showVisual2" onChange={() => setShowVisual2(!showVisual2)}/>
          <label className="form-check-label" htmlFor="visual2Checkbox">Visual 2</label>
        </div>
        <div className='form-check form-check-inline form-switch'>
          <input className="form-check-input" type="checkbox" name="showVisual3" id="visual3Checkbox" value="showVisual3" onChange={() => setShowVisual3(!showVisual3)}/>
          <label className="form-check-label" htmlFor="visual3Checkbox">Visual 3</label>
        </div>
        <div className='form-check form-check-inline form-switch'>
          <input className="form-check-input" type="checkbox" name="showVisual4" id="visual4Checkbox" value="showVisual4" onChange={() => setShowVisual4(!showVisual4)}/>
          <label className="form-check-label" htmlFor="visual4Checkbox">Visual 4</label>
        </div>
        <div className='form-check form-check-inline form-switch'>
          <input className="form-check-input" type="checkbox" name="showVisual5" id="visual5Checkbox" value="showVisual5" onChange={() => setShowVisual5(!showVisual5)}/>
          <label className="form-check-label" htmlFor="visual5Checkbox">Visual 5</label>
        </div>
        <div className='form-check form-check form-switch'>
          <input className="form-check-input" type="checkbox" name="chartsMode" id="chartsMode" value="chartsMode" onChange={() => handleSetVisualData(0, !chartMode)}/>
          <label className="form-check-label" htmlFor="chartsMode">2 Charts per row</label>
        </div>
        <div className={`two-rows-${chartMode}`}>
          {showVisual1 && (
            <div className='visual1-user-container'>
              <Visual1Chart addingNewUserView={true} handleSetVisualData={handleSetVisualData}/>
            </div>
          )}
          {showVisual2 && (
            <div className='visual2-user-container'>
              <Visual2Chart addingNewUserView={true} handleSetVisualData={handleSetVisualData}/>
            </div>
          )}
          {showVisual3 && (
            <div className='visual3-user-container'>
              <Visual3Chart addingNewUserView={true} handleSetVisualData={handleSetVisualData}/>
            </div>
          )}
          {showVisual4 && (
            <div className='visual4-user-container'>
              <Visual4Chart addingNewUserView={true} handleSetVisualData={handleSetVisualData}/>
            </div>
          )}
          {showVisual5 && (
            <div className='visual5-user-container'>
              <Visual5Chart addingNewUserView={true} handleSetVisualData={handleSetVisualData}/>
            </div>
          )}
        </div>
    </main>
  );
};