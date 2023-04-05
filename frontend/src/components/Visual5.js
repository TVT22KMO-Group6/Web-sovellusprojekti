import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const App = () => {
  const [emissionData, setEmissionData] = useState([]);
  const [subEmissionData, setSubsectorData] = useState([]);
  const [displayedChart, setDisplayedChart] = useState('sector');
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    fetchEmissionSectors();
  }, []);

  const fetchEmissionSectors = async () => {
    const response = await fetch('http://localhost:8080/emission-sectors');
    const data = await response.json();
    setEmissionData(data);
  };

  const handleSectorClick = async (sectorId) => {
    const response = await fetch(`http://localhost:8080/emission-subsectors/${sectorId}`);
    const data = await response.json();
    setSubsectorData(data);
  };

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

  const options = {
    responsive: true,
    maintainAspectRatio: true,
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

  const subsectorOptions = {
    responsive: true,
    maintainAspectRatio: true,
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

  return (
    <div style={{ width: '50%', height: '50%' }}>
      {displayedChart === 'sector' ? (
        <Doughnut key={chartKey} data={sectorData} options={options} />
      ) : (
        <Doughnut key={chartKey} data={subSectorData} options={subsectorOptions} />
      )}
    </div>
  );
};

export default App;