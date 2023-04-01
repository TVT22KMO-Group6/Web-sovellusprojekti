import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Chart, LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-luxon';

Chart.register(LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend);

// Define API endpoints
const maunaLoaMonthlyUrl = `http://localhost:8080/visual2/mauna-loa-monthly`;
const maunaLoaAnnualUrl = `http://localhost:8080/visual2/mauna-loa-annual`;
const iceCore1Url = `http://localhost:8080/visual2/ice-core-1`;
const iceCore2Url = `http://localhost:8080/visual2/ice-core-2`;
const iceCore3Url = `http://localhost:8080/visual2/ice-core-3`;


const Visual2 = () => {
  const [maunaLoaMonthly, setmaunaArray] = useState([]);
  const [maunaLoaAnnual, setmaunaArrayM] = useState([]);
  const [iceCore1, seticeCore1Array] = useState([]);
  const [iceCore2, seticeCore2Array] = useState([]);
  const [iceCore3, seticeCore3Array] = useState([]);

  useEffect(() => {
    console.log('Processed Mauna Loa Annual Data:', maunaLoaAnnual);
  }, [maunaLoaAnnual]);

  useEffect(() => {
    console.log('Processed Antarctic Dataset 2:', iceCore2);
  }, [iceCore2]);

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
          axios.get(maunaLoaMonthlyUrl),
          axios.get(maunaLoaAnnualUrl),
          axios.get(iceCore1Url),
          axios.get(iceCore2Url),
          axios.get(iceCore3Url),
        ]);

        console.log('Raw Mauna Loa Annual Data:', maunaLoaAnnualResponse.data);
        console.log('Raw Antarctic Dataset 2:', iceCore2Response.data);

        setmaunaArray(maunaLoaMonthlyResponse.data.map(mauna => {
          return { x: DateTime.fromObject({ year: mauna.year, month: mauna.monthOfYear }), y: mauna.data }
        }));
        
        setmaunaArrayM(maunaLoaAnnualResponse.data.map(maunaM => {
          return { x: DateTime.fromObject({ year: maunaM.year, month: 1 }), y: maunaM.data }
        }));
  
        seticeCore1Array(iceCore1Response.data.map(Ice1 => {
          return { x: DateTime.fromObject({ year: Ice1.year, month: 1 }), y: Ice1.data }
        }));
  
        seticeCore2Array(iceCore2Response.data.map(Ice2 => {
          return { x: DateTime.fromObject({ year: Ice2.year, month: 1 }), y: Ice2.data }
        }));
  
        seticeCore3Array(iceCore3Response.data.map(Ice3 => {
          return { x: DateTime.fromObject({ year: Ice3.year, month: 1 }), y: Ice3.data }
        }));
  
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
        pointRadius: 2,
      },
      {
        label: 'Mauna Loa CO2 Annual Mean',
        data: maunaLoaAnnual,
        borderColor: 'rgb(204, 0, 204)',
        backgroundColor: 'rgba(204, 0, 204, 0.5)',
        pointRadius: 2,
      },

      {
       label: 'Antarctic Ice Core Set 1',
    data: iceCore1,
    borderColor: 'rgb(102, 0, 51)',
    backgroundColor: 'rgba(102, 0, 51, 0.5)',
    pointRadius: 2,
  },
  {
    label: 'Antarctic Ice Core Set 2',
    data: iceCore2,
    borderColor: 'rgb(51, 51, 153)',
    backgroundColor: 'rgba(51, 51, 153, 0.5)',
    pointRadius: 2,
  },
  {
    label: 'Antarctic Ice Core Set 3',
    data: iceCore3,
    borderColor: 'rgb(0, 102, 204)',
    backgroundColor: 'rgba(0, 102, 204, 0.5)',
    pointRadius: 2,
  },
],
};

const options = {
  scales: {

    x: {
      type: 'time',
      time: {
        unit: 'year',
      },
      position: 'bottom',
      title:{
        display: true,
        text: "date",
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
        mode: 'index',
        intersect: false,
      },
      title: {
        display: true,
        text: 'DATAAAA',
      },
      legend: {
        display: true,
      },
    },
    animation: {
      duration: 0,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    adapters: {
      date: { id: 'luxon', DateTime },
    },
    layout: {
      padding: {
        top: 50,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );  
};

export default Visual2;
