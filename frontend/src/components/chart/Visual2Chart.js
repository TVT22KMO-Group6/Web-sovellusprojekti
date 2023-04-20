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

const Visual2 = () => {
  const [maunaLoaMonthly, setmaunaArray] = useState([]);
  const [maunaLoaAnnual, setmaunaArrayM] = useState([]);
  const [iceCore1, seticeCore1Array] = useState([]);
  const [iceCore2, seticeCore2Array] = useState([]);
  const [iceCore3, seticeCore3Array] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          maunaLoaMonthlyResponse,
          maunaLoaAnnualResponse,
          iceCore1Response,
          iceCore2Response,
          iceCore3Response,
        ] = await Promise.all([
          axios.get(process.env.REACT_APP_VISUAL_2_MAUNA_LOA_MONTHLY_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_2_MAUNA_LOA_ANNUAL_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_2_ICE_CORE_1_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_2_ICE_CORE_2_API_URL),
          axios.get(process.env.REACT_APP_VISUAL_2_ICE_CORE_3_API_URL),
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
    
        seticeCore1Array(
          iceCore1Response.data
            .map((Ice1) => {
              return {
                x: DateTime.fromObject({ year: Ice1.year}),
                y: Ice1.data,
              };
            })
            .sort(sortDataByDate)
        );
    
        seticeCore2Array(
          iceCore2Response.data
            .map((Ice2) => {
              return {
                x: DateTime.fromObject({ year: Ice2.year}),
                y: Ice2.data,
              };
            })
            .sort(sortDataByDate)
        );
    
        seticeCore3Array(
          iceCore3Response.data
            .map((Ice3) => {
              return {
                x: DateTime.fromObject({ year: Ice3.year}),
                y: Ice3.data,
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
        label: 'Mauna Loa CO2 Monthly Mean',
        data: maunaLoaMonthly,
        borderColor: 'rgb(255, 102, 0)',
        backgroundColor: 'rgba(255, 102, 0, 0.3)',
        pointRadius: 1,
        pointHitRadius: 20,

      },
      {
        label: 'Mauna Loa CO2 Annual Mean',
        data: maunaLoaAnnual,
        borderColor: 'rgb(204, 0, 204)',
        backgroundColor: 'rgba(204, 0, 204, 0.5)',
        pointRadius: 3,
        pointHitRadius: 20,
      },

      {
       label: 'Ice Core 1',
    data: iceCore1,
    borderColor: 'rgb(102, 0, 51)',
    backgroundColor: 'rgba(102, 0, 51, 0.5)',
    pointRadius: 3,
    pointHitRadius: 20,
  },
  {
    label: 'Ice Core 2',
    data: iceCore2,
    borderColor: 'rgb(51, 51, 153)',
    backgroundColor: 'rgba(51, 51, 153, 0.5)',
    pointRadius: 3,
    pointHitRadius: 20,
  },
  {
    label: 'Ice Core 3',
    data: iceCore3,
    borderColor: 'rgb(0, 102, 204)',
    backgroundColor: 'rgba(0, 102, 204, 0.5)',
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
        text: "Date",
      }

    },
    y: {
      type: "linear",
      position: "left",
      title: {
        display: true,
        text: "CO2 levels",
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
        text: 'Antarctic Ice Core records of atmospheric CO2 ratios combined with Mauna Loa measurements',
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
    <div style={{ width: "100%", height: "80vh" }}>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};


export default Visual2;