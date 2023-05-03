import React, { useState, useEffect, } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";

export default function Visual4Chart({userVisualOptions, addingNewUserView, handleSetVisualData}) {
  const [chartData, setChartData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/visual4/");
      const data = await res.json();

      const emissionsByCountry = new Map();
      data.forEach((row) => {
        if (!emissionsByCountry.has(row.country)) {
          emissionsByCountry.set(row.country, []);
        }
        emissionsByCountry.get(row.country).push({
          ...row,
          emissions: row.temission * 3.664, // Multiply emission data with 3.664
        });
      });

      emissionsByCountry.forEach((rows, country) => {
        rows.sort((a, b) => a.year - b.year);
      });

      setChartData(emissionsByCountry);

      // Print the emission data for the USA to the console
      const usaEmissions = emissionsByCountry.get("USA");
      console.log("USA emissions:", usaEmissions);
    };
    fetchData();

 
    
  }, []);

  const countries = Array.from(chartData.keys()).map((country) => ({
    label: country,
    value: country,
  }));

 

  const data = {
    datasets: selectedCountries.map((country) => {
      const color = `rgba(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255}, 0.5)`;
    
      return{
      label: country,
      data: chartData.get(country),
      borderColor: color,
      backgroundColor: color,
      parsing: {
        xAxisKey: "year",
        yAxisKey: "emissions",
      },
      pointRadius: 1,
    }}),
  };

  const options = {
    maintainAspectRatio: false,
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
      x: {
        type: "linear",
        display: true,
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        type: "linear",
        display: true,
        title: {
          display: true,
          text: "Emissions",
        },
      },
    },
  };

  return (
    <div>
      <div>
        <h1>CO2 emissions by country</h1>
          <p>
            Stacked line chart illustrates the historical trend of CO2 emissions for the selected countries between 1959 and 2020.  <br/>
            <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Data description.</a><br/>
            <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Dataset</a><br/>
        </p>
      </div>
      <h1>LineChart</h1>
      <Select
        isMulti
        value={selectedCountries.map((country) => ({
          label: country,
          value: country,
        }))}
        options={countries}
        onChange={(selectedOptions) =>
          setSelectedCountries(selectedOptions.map((option) => option.value))
        }
      />
      <div className='visual4-parent-container'>
        <Line options={options} data={data} />
      </div>
      <textarea
        disabled={userVisualOptions != null || !addingNewUserView}
        className="form-control"
        defaultValue={userVisualOptions || "Emission data by country"}
        onChange={e=> handleSetVisualData(4, e.target.value)}>
      </textarea>
    </div>
 

  );
}