import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Chart, LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-luxon';

Chart.register(LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend);

const sortDataByDate = (a, b) => {
  return a.x - b.x;
};

const Visual3 = () => {
  const [maunaLoaMonthly, setmaunaArray] = useState([]);
  const [maunaLoaAnnual, setmaunaArrayM] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          maunaLoaMonthlyResponse,
          maunaLoaAnnualResponse,
        ] = await Promise.all([
          axios.get(process.env.REACT_APP_VISUAL_2_MAUNA_LOA_MONTHLY_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_2_MAUNA_LOA_ANNUAL_API_URL),
        ]);
  
        setmaunaArray(
          maunaLoaMonthlyResponse.data
            .map((mauna) => {
              return {
                x: DateTime.fromObject({ year: mauna.year, month: mauna.month || 1 }),
                y: mauna.data,
              };
            })
            .sort(sortDataByDate)
        );
    
        setmaunaArrayM(
          maunaLoaAnnualResponse.data
            .map((maunaM) => {
              return {
                x: DateTime.fromObject({ year: maunaM.year}),
                y: maunaM.data,
              };
            })
            .sort(sortDataByDate)
        );

      } catch (error) {
        alert(error.response.data.error);
      }
    };
  
    fetchData();
  }, []);
  


  const data = {
    datasets: [
      {
        label: 'Global',
        data: maunaLoaMonthly,
        borderColor: 'rgb(255, 102, 0)',
        backgroundColor: 'rgba(255, 102, 0, 0.3)',
        pointRadius: 1,
        pointHitRadius: 20,

      },
      {
        label: 'Carbon',
        data: maunaLoaAnnual,
        borderColor: 'rgb(204, 0, 204)',
        backgroundColor: 'rgba(204, 0, 204, 0.5)',
        pointRadius: 3,
        pointHitRadius: 20,
      },
      {
        label: 'Events',
        data: maunaLoaAnnual,
        borderColor: 'rgb(204, 0, 204)',
        backgroundColor: 'rgba(204, 0, 204, 0.5)',
        pointRadius: 3,
        pointHitRadius: 20,
      },

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
      }

    },
    y: {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "Carbon",
      },
    },

    y1: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Global",
        },
      },
  },
    plugins: {
      tooltip: {
        mode: 'x',
        intersect: false,
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
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ position: "relative", width: "100%", height: "800px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};


export default Visual2;