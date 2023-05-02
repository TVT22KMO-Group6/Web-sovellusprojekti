import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, DoughnutController, ArcElement } from 'chart.js';

// Register the necessary Chart.js components
Chart.register (DoughnutController, ArcElement );

const Visual5 = ({userVisualOptions, addingNewUserView, handleSetVisualData}) => {
  // Define state variables
  const [emissionData, setEmissionData] = useState([]);
  const [subEmissionData, setSubsectorData] = useState([]);
  const [displayedChart, setDisplayedChart] = useState('sector');
  const [chartKey, setChartKey] = useState(0);

  // Fetch emission sectors data on component mount
  useEffect(() => {
    fetchEmissionSectors();
  }, []);

  // Function to fetch emission sectors data
  const fetchEmissionSectors = async () => {
    const response = await fetch(process.env.REACT_APP_VISUAL_5_SECTORS_API_URL);
    const data = await response.json();
    setEmissionData(data);
  };

  // Function to fetch subsector data based on sectorId
  const handleSectorClick = async (sectorId) => {
    const response = await fetch(process.env.REACT_APP_VISUAL_5_SUB_SECTORS_API_URL + sectorId);
    const data = await response.json();
    setSubsectorData(data);
  };

  // Color definitions for the charts
  const backgroundColors = [
    '#D22500', '#18AF00', '#BFC800', '#005DCC',
    '#CF5B00', '#98D600', '#9800CD', '#CB006C',
    '#BE94AA', '#45BFBB', '#1C2833', '#AAB7B8',
  ];

  const hoverBackgroundColors = [
    '#FF2D00', '#20E800', '#E7F200', '#0074FF',
    '#FF7000', '#B5FF00', '#BD00FF', '#FF0088',
    '#FFC5E4', '#58F3EE', '#566573', '#D5DBDB',

  ];

  // Prepare sectorData for the Doughnut chart
  const sectorData = {
    labels: emissionData.map((sector) => sector.sector),
    datasets: [
      {
        data: emissionData.map((sector) => sector.share),
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
      },
    ],
  };

  // Prepare subSectorData for the Doughnut chart
  const subSectorData = {
    labels: subEmissionData.map((subsector) => subsector.sector),
    datasets: [
      {
        data: subEmissionData.map((subsector) => subsector.share),
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
      },
    ],
  };

  // Options for the sector Doughnut chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'CO2 Emissions by Sectors',
      },
    },
    onClick: async (event, chartElements) => {
      if (chartElements && chartElements.length > 0) {
        const chartElement = chartElements[0];
        const index = chartElement.index;

        if (index >= 0 && index < emissionData.length) {
          const sectorId = emissionData[index].id;
          await handleSectorClick(sectorId);

          setDisplayedChart('subsector');
          setChartKey((prevKey) => prevKey + 1);
        }
      }
    },
  };

  // Options for the subsector Doughnut chart
  const subsectorOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'CO2 Emissions by Subsectors',
      },
    },
    onClick: () => {
      setDisplayedChart('sector');
      setChartKey((prevKey) => prevKey + 1);
    },


  };

  // Render the component
  return (
      <div>
        <div className="chart5-container">
        {displayedChart === 'sector' ? (
          <Doughnut key={chartKey} data={sectorData} options={options} />
        ) : (
          <Doughnut key={chartKey} data={subSectorData} options={subsectorOptions} />
        )}
        </div>
        <textarea
          disabled={userVisualOptions != null || !addingNewUserView}
          className="form-control"
          defaultValue={userVisualOptions || "CO2 Emissions by Sectors"}
          onChange={e=> handleSetVisualData(5, e.target.value)}>
        </textarea>
      </div>
      

  );
};

export default Visual5;