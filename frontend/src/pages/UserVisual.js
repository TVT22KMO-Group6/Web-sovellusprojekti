import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Visual1Chart from '../components/chart/Visual1Chart';
import Visual2Chart from '../components/chart/Visual2Chart';
import Visual3Chart from '../components/chart/Visual3Chart';
import Visual4Chart from '../components/chart/Visual4Chart';
import Visual5Chart from '../components/chart/Visual5Chart';

// UserVisual component for displaying visualizations based on user's input
export default function UserVisual() {
  const {url} = useParams();
  const [visual1Data, setVisual1Data] = useState(null);
  const [visual2Data, setVisual2Data] = useState(null);
  const [visual3Data, setVisual3Data] = useState(null);
  const [visual4Data, setVisual4Data] = useState(null);
  const [visual5Data, setVisual5Data] = useState(null);
  const [chartMode, setChartMode] = useState(false);

  // Fetch data for the visualizations
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/user/visual/${url}`);
        if (response.data.data == null) {
          window.location.href = '/';
        }
        var visualData = JSON.parse(response.data.data);
        setChartMode(visualData?.chartMode);
        setVisual1Data(visualData?.visual1);
        setVisual2Data(visualData?.visual2);
        setVisual3Data(visualData?.visual3);
        setVisual4Data(visualData?.visual4);
        setVisual5Data(visualData?.visual5);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main role="main" className="container-fluid">
      {/* Dynamically render the visualizations based on the chart mode */}
      <div className={`two-rows-${chartMode}`}>
        {/* Render Visual1Chart if visual1Data is available */}
        {(visual1Data || visual1Data === "") && (
          <div className='visual1-user-container'>
            <Visual1Chart userVisualOptions={visual1Data}/>
          </div>
        )}
        {/* Render Visual2Chart if visual2Data is available */}
        {(visual2Data || visual2Data === "") && (
          <div className='visual2-user-container'>
            <Visual2Chart userVisualOptions={visual2Data}/>
          </div>
        )}
        {/* Render Visual3Chart if visual3Data is available */}
        {(visual3Data || visual3Data === "") && (
          <div className='visual3-user-container'>
            <Visual3Chart userVisualOptions={visual3Data}/>
          </div>
        )}
        {/* Render Visual4Chart if visual4Data is available */}
        {(visual4Data || visual4Data === "") && (
          <div className='visual4-user-container'>
            <Visual4Chart userVisualOptions={visual4Data}/>
          </div>
        )}
        {/* Render Visual5Chart if visual5Data is available */}
        {(visual5Data || visual5Data === "") && (
          <div className='visual5-user-container'>
            <Visual5Chart userVisualOptions={visual5Data}/>
          </div>
        )}
      </div>
    </main>
  );
};