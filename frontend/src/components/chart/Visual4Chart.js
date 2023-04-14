import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";


export default function Visual4Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/visual4/");
      const data = await res.json();
      console.log("foobar", data)
    
  
const emissionsByCountry = new Map();
data.forEach((row) => {
  if (!emissionsByCountry.has(row.country)) {
    emissionsByCountry.set(row.country, []);

  }
  emissionsByCountry.get(row.country).push(row);
});

emissionsByCountry.forEach((rows, country) => {
  rows.sort((a, b) => a.year - b.year);
});
console.log("foobar2", emissionsByCountry);
      setChartData(data);
    };
    fetchData();
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
