import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Select from "react-select";

export default function Visual4Chart() {
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
    datasets: selectedCountries.map((country) => ({
      label: country,
      data: chartData.get(country),
      backgroundColor: `rgba(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255}, 0.5)`,
      parsing: {
        xAxisKey: "year",
        yAxisKey: "emissions",
      },
      pointRadius: 1,
    })),
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
    <div style={{ width: "50%" }}>
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
        styles={{
          control: (provided) => ({
            ...provided,
            width: "100%",
          }),
        }}
      />
      <Line options={options} data={data} />
    </div>
  );
}