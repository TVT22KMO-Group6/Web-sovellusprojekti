import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

const testData = [
    {
        id: 1,
        time: 1850,
        temperature: -0.418,
        hemisphere: "Global",
        timeframe: "Annual"
    },
    {
        id: 11,
        time: 1860,
        temperature: -0.39,
        hemisphere: "Global",
        timeframe: "Annual"
    },
    {
      id: 127,
      time: 1976,
      temperature: -0.216,
      hemisphere: "Global",
      timeframe: "Annual"
  }
];

export default function Visual1Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/visual1`)
     .then(response => setChartData(response.json()));
   }, []);

    const data = {
      datasets: [
        {
          label: "Global annual anomalies",
          data: chartData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          //yAxisID: "temperature",
          parsing: {
            xAxisKey: "time",
            yAxisKey: "temperature",
          },
          pointRadius: 1,
        },
        {
            label: "North annual anomalies"
        },
        {
            label: "South annual anomalies"
        },
        {
            label: "Reconstruction"
        }
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