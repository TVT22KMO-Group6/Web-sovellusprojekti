import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";


export default function Visual1Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/visual4`)
     .then(response => setChartData(response.json()));
   }, []);

    const data = {
      datasets: [
        {
          label: "USA",
          data: chartData,
            backgroundColor: "rgba(0, 0, 255, 0.5)",
         
          parsing: {
            xAxisKey: "emissions",
            yAxisKey: "year",
          },
          pointRadius: 1,
        },
        {
            label: "China",
          data: chartData,
            backgroundColor: "rgba(37, 171, 255, 0.8)",
         
          parsing: {
            xAxisKey: "emissions",
            yAxisKey: "year",
          },
          pointRadius: 1,
        },
        {
            label: "Canada",
          data: chartData,
            backgroundColor: "rgba(0, 255, 0, 0.8)",
         
          parsing: {
            xAxisKey: "emissions",
            yAxisKey: "year",
          },
          pointRadius: 1,
        },
    
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
      },
      scales: {
        temperature: {
          type: "linear",
          display: true,
          position: "bottom",
        },
      },
    };
  
    return (
      <div style={{ width: "50%" }}>
        <h1>LineChart</h1>
        <Line options={options} data={data} />
      </div>
    );
  }