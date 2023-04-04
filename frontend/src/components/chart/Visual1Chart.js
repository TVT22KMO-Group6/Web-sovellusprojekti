import React from 'react';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

const sortByYear = (a, b) => {
  const n = a.time - b.time;
  if (n !== 0) {
    return n;
  }
};

const Visual1Chart = () => {
  
  const [globalAnnualData, setGlobalAnnualData] = useState([]);
  const [northAnnualData, setNorthAnnualData] = useState([]);
  const [southAnnualData, setSouthAnnualData] = useState([]);
  const [reconstructionData, setReconstructionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_VISUAL_1_DATA_URL);
      const json = await response.json();
  
      setGlobalAnnualData(json.filter(json => json.hemisphere == 'Global' && json.timeframe == 'Annual').sort(sortByYear));
      setNorthAnnualData(json.filter(json => json.hemisphere == 'Northern' && json.timeframe == 'Annual').sort(sortByYear));
      setSouthAnnualData(json.filter(json => json.hemisphere == 'Southern' && json.timeframe == 'Annual').sort(sortByYear));
      setReconstructionData(json.filter(json => json.hemisphere == 'Reconstruction' && json.timeframe == 'Annual').sort(sortByYear));
    }

    fetchData()
    .catch(console.error);
  }, [])

    const data = {
      datasets: [
        {
          label: 'Global annual anomalies',
          data: globalAnnualData,
          borderColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgb(0, 0, 0, 0.5)',
          parsing: {
            xAxisKey: 'time',
            yAxisKey: 'temperature',
          },
          pointRadius: 2,
        },
        {
            label: 'North annual anomalies',
            data: northAnnualData,
            borderColor: 'rgb(255, 0, 0)',
            backgroundColor: 'rgb(255, 0, 0, 0.5)',
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'temperature',
            },
            pointRadius: 2,
        },
        {
            label: 'South annual anomalies',
            data: southAnnualData,
            borderColor: 'rgb(255, 200, 0)',
            backgroundColor: 'rgb(255, 200, 0, 0.5)',
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'temperature',
            },
            pointRadius: 2,
        },
        {
            label: 'Reconstruction',
            data: reconstructionData,
            borderColor: 'rgb(0, 126, 255)',
            backgroundColor: 'rgb(0, 126, 255, 0.5)',
            parsing: {
              xAxisKey: 'time',
              yAxisKey: 'temperature',
            },
            pointRadius: 2,
        }
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false,
        },
      },
      scales: {
        temperature: {
          type: 'linear',
          display: true,
          position: 'bottom',
        },
      },
    };
  
    return (
      <div style={{ width: '95%' }}>
        <div className='container-visual-radios'>
          <div className='radio'>
            <label>
              <input type='radio' value='annual' name='timeframe' defaultChecked />
              Annual
            </label>
          </div>
          <div className='radio'>
            <label>
              <input type='radio' value='monthly' name='timeframe' />
              Monthly
            </label>
          </div>
        </div>
        <Line options={options} data={data} />
      </div>
    );
  };

  export default Visual1Chart;