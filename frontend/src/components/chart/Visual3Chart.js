import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Chart, LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-luxon';

Chart.register(LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend);

const sortDataByType = (a, b) => {
  const n = a.year - b.year;
  if (n !== 0) {
    return n;
  }
};

const Visual3 = () => {
  const [GlobalData, setGlobalArray] = useState([]);
  const [CarbonData, setCarbonArray] = useState([]);
  //const [EventData, setEventArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          GlobalDataResponse,
          CarbonDataResponse,
       //   EventDataResponse,
        ] = await Promise.all([
          axios.get(process.env.REACT_APP_VISUAL_3_GLOBAL_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_3_CARBON_API_URL),
       //   axios.get(process.env.REACT_APP_VISUAL_3_EVENT_API_URL),
        ]);
  
        setGlobalArray(
          GlobalDataResponse.data
          .sort(sortDataByType)
            .map((global) => {
              return {
                x: DateTime.fromObject({ year: global.year/1000}),
                y: global.data,
              };
            })
            
        );
    
        setCarbonArray(
          CarbonDataResponse.data
          .sort(sortDataByType)
            .map((carbon) => {
              return {
                x: DateTime.fromObject({ year: carbon.year/1000}),
                y: carbon.data,
              };
            })
            
        );
    
     /*   setEventArray(
          EventDataResponse.data
          .sort(sortDataByType)
            .map((event) => {
              return {
                x: DateTime.fromObject({ year: event.year/1000}),
                y: event.data,
              };
            })
        ); */
      } catch (error) {
        alert(error.response.data.error);
      }
    };
  
    fetchData();
  }, []);


    const data = {
      datasets: [
        {
          label: 'Global Data',
          data: GlobalData,
          borderColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgb(0, 0, 0, 0.5)',
          pointRadius: 0,
        pointHitRadius: 1,
        yAxisID: "y1"
        },
        {
          label: 'Carbon Data',
          data: CarbonData,
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgb(255, 0, 0, 0.5)',
          pointRadius: 0,
        pointHitRadius: 1,
        yAxisID: "y"
        },
      /*  {
          label: 'Events',
          data: EventData,
          borderColor: 'rgb(255, 200, 0)',
          backgroundColor: 'rgb(255, 200, 0, 0.5)',
          pointRadius: 0,
        pointHitRadius: 1,
        }, */
      ],
    };

  
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
      
          x: {
            type: 'time',
            time: {
              unit: 'year',
            },
            position: 'bottom',
            title:{
              display: true,
              text: "Years",
            },
            ticks:{
                stepSize: 1
            }
      
          },

          y: {
            type: "linear",
            position: "left",
            title: {
              display: true,
              text: "Carbon",
            },
            min: 175,
          max: 290,
          ticks:{
            stepSize: 5
        },
          },

          y1: {
            type: "linear",
            position: "right",
            title: {
              display: true,
              text: "Global",
            },
            min: -7.5,
          max: 2.5,
          ticks:{
            stepSize: 0.5
            }
          },
        },

          plugins: {
            tooltip: {
              mode: 'x',
              intersect: false,
              callbacks: {
                title: function(context) {
                  return 'test';
                }
              }
            },
            title: {
              display: true,
              text: 'Evolution of global temperature over the past two million years',
            },
            legend: {
              display: true,
            },
          },
          adapters: {
            date: { id: 'luxon', DateTime },
          },
        };
      
  
    return (
      <div>
        <h1>Evolution of global temperature over the past two million years</h1>
        <div style={{ width: "100%", height: "80vh" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
      );
    };
    
  export default Visual3;