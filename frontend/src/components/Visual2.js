import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { DateTime } from 'luxon';
import { Chart, LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-luxon';

Chart.register(LineController, LineElement, PointElement, TimeScale, LinearScale, Title, Tooltip, Legend);

// Define API endpoints
const maunaLoaMonthlyUrl = 'http://localhost:8080/visual2/timeframe/monthly';
const maunaLoaAnnualUrl = 'http://localhost:8080/visual2/timeframe/annual';
const antarcticDataset1Url = 'http://localhost:8080/visual2/ice_core/1';
const antarcticDataset2Url = 'http://localhost:8080/visual2/ice_core/2';
const antarcticDataset3Url = 'http://localhost:8080/visual2/ice_core/3';

const Visual2 = () => {
  const [maunaLoaMonthly, setMaunaLoaMonthly] = useState([]);
  const [maunaLoaAnnual, setMaunaLoaAnnual] = useState([]);
  const [antarcticDataset1, setAntarcticDataset1] = useState([]);
  const [antarcticDataset2, setAntarcticDataset2] = useState([]);
  const [antarcticDataset3, setAntarcticDataset3] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          maunaLoaMonthlyResponse,
          maunaLoaAnnualResponse,
          antarcticDataset1Response,
          antarcticDataset2Response,
          antarcticDataset3Response,
        ] = await Promise.all([
          axios.get(maunaLoaMonthlyUrl),
          axios.get(maunaLoaAnnualUrl),
          axios.get(antarcticDataset1Url),
          axios.get(antarcticDataset2Url),
          axios.get(antarcticDataset3Url),
        ]);

        setMaunaLoaMonthly(maunaLoaMonthlyResponse.data);
        console.log(maunaLoaMonthlyResponse.data);
        setMaunaLoaAnnual(maunaLoaAnnualResponse.data);
        setAntarcticDataset1(antarcticDataset1Response.data);
        setAntarcticDataset2(antarcticDataset2Response.data);
        setAntarcticDataset3(antarcticDataset3Response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
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
        parsing: {
          xAxisKey: 'year',
          yAxisKey: 'co2',
        },
        pointRadius: 2,
      },
      {
        label: 'Mauna Loa CO2 Annual Mean',
        data: maunaLoaAnnual,
        borderColor: 'rgb(204, 0, 204)',
        backgroundColor: 'rgba(204, 0, 204, 0.5)',
        parsing: {
          xAxisKey: 'year',
          yAxisKey: 'co2',
        },
        pointRadius: 2,
      },

      {
       label: 'Antarctic Ice Core Set 1',
    data: antarcticDataset1,
    borderColor: 'rgb(102, 0, 51)',
    backgroundColor: 'rgba(102, 0, 51, 0.5)',
    parsing: {
      xAxisKey: 'year',
      yAxisKey: 'co2',
    },
    pointRadius: 2,
  },
  {
    label: 'Antarctic Ice Core Set 2',
    data: antarcticDataset2,
    borderColor: 'rgb(51, 51, 153)',
    backgroundColor: 'rgba(51, 51, 153, 0.5)',
    parsing: {
      xAxisKey: 'year',
      yAxisKey: 'co2',
    },
    pointRadius: 2,
  },
  {
    label: 'Antarctic Ice Core Set 3',
    data: antarcticDataset3,
    borderColor: 'rgb(0, 102, 204)',
    backgroundColor: 'rgba(0, 102, 204, 0.5)',
    parsing: {
      xAxisKey: 'year',
      yAxisKey: 'co2',
    },
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
      },
      y: {
        type: 'linear',
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      title: {
        display: true,
        text: 'Antarctic Ice Core Data',
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