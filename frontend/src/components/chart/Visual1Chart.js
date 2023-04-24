import { React, createRef, useRef } from 'react';
import { Line, getElementsAtEvent, getDatasetAtEvent } from 'react-chartjs-2';
import { useState, useEffect, useMemo } from 'react';
import { DateTime } from 'luxon';

const sortAnnualData = (a, b) => {
  const n = a.time - b.time;
  if (n !== 0) {
    return n;
  }
};

const sortMonthlyData = (a, b) => {
  return a.time.localeCompare(b.time);
};

const Visual1Chart = ({userVisualOptions, addingNewUserView, handleSetVisualData}) => {
  const [timeframe, setTimeframe] = useState("Annual");
  const [globalAnnualData, setGlobalAnnualData] = useState([]);
  const [northAnnualData, setNorthAnnualData] = useState([]);
  const [southAnnualData, setSouthAnnualData] = useState([]);
  const [reconstructionData, setReconstructionData] = useState([]);
  const [globalMonthlyData, setGlobalMonthlyData] = useState([]);
  const [northMonthlyData, setNorthMonthlyData] = useState([]);
  const [southMonthlyData, setSouthMonthlyData] = useState([]);

  const filteredData = useMemo(() => {
    return {
      Global: {
        Annual: globalAnnualData,
        Monthly: globalMonthlyData,
      },
      Northern: {
        Annual: northAnnualData,
        Monthly: northMonthlyData,
      },
      Southern: {
        Annual: southAnnualData,
        Monthly: southMonthlyData,
      },
      Reconstruction: {
        Annual: reconstructionData,
      },
    };
  }, [globalAnnualData, northAnnualData, southAnnualData, reconstructionData, globalMonthlyData, northMonthlyData, southMonthlyData]);

  useEffect(() => {
    //setTimeframe(timeframe);
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_VISUAL_1_API_URL);
      const json = await response.json();

      setGlobalAnnualData(json.filter(data => data.hemisphere === 'Global' && data.timeframe === 'Annual')
        .sort(sortAnnualData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy"), y: data.temperature }))
      );
      setNorthAnnualData(json.filter(json => json.hemisphere === 'Northern' && json.timeframe === 'Annual')
        .sort(sortAnnualData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy"), y: data.temperature }))
      );
      setSouthAnnualData(json.filter(json => json.hemisphere === 'Southern' && json.timeframe === 'Annual')
        .sort(sortAnnualData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy"), y: data.temperature }))
      );
      setReconstructionData(json.filter(json => json.hemisphere === 'Reconstruction' && json.timeframe === 'Annual')
        .sort(sortAnnualData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy"), y: data.temperature }))
      );

      setGlobalMonthlyData(json.filter(json => json.hemisphere === 'Global' && json.timeframe === 'Monthly')
        .sort(sortMonthlyData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy-MM"), y: data.temperature }))
      );
      setNorthMonthlyData(json.filter(json => json.hemisphere === 'Northern' && json.timeframe === 'Monthly')
        .sort(sortMonthlyData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy-MM"), y: data.temperature }))
      );
      setSouthMonthlyData(json.filter(json => json.hemisphere === 'Southern' && json.timeframe === 'Monthly')
        .sort(sortMonthlyData)
        .map(data => ({ x: DateTime.fromFormat(data.time, "yyyy-MM"), y: data.temperature }))
      );
    }

    fetchData().catch(console.error);
  }, [])

  const TimeframeAnnual = () => {
    setTimeframe("Annual");
  };

  const TimeframeMonthly= () => {
    setTimeframe("Monthly");
  };

    const annualData = {
      datasets: [
        {
          label: 'Global annual anomalies',
          data: filteredData.Global.Annual,
          borderColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgb(0, 0, 0, 0.5)'
        },
        {
          label: 'North annual anomalies',
          data: filteredData.Northern.Annual,
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgb(255, 0, 0, 0.5)'
        },
        {
          label: 'South annual anomalies',
          data: filteredData.Southern.Annual,
          borderColor: 'rgb(255, 200, 0)',
          backgroundColor: 'rgb(255, 200, 0, 0.5)'
        },
        {
          label: 'Reconstruction',
          data: filteredData.Reconstruction.Annual,
          borderColor: 'rgb(0, 126, 255)',
          backgroundColor: 'rgb(0, 126, 255, 0.5)',
          hidden: true
        }
      ],
    };

    const monthlyData = {
      datasets: [
        {
          label: 'Global monthly anomalies',
          data: filteredData.Global.Monthly,
          borderColor: 'rgb(0, 0, 0)',
          backgroundColor: 'rgb(0, 0, 0, 0.5)'
        },
        {
          label: 'North monthly anomalies',
          data: filteredData.Northern.Monthly,
          borderColor: 'rgb(255, 0, 0)',
          backgroundColor: 'rgb(255, 0, 0, 0.5)'
        },
        {
          label: 'South monthly anomalies',
          data: filteredData.Southern.Monthly,
          borderColor: 'rgb(255, 200, 0)',
          backgroundColor: 'rgb(255, 200, 0, 0.5)'
        }
      ],
    };
  
    const options = {
      responsive: true,
      animation: false,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        },
        title: {
          display: true,
          text: "HadCRUT5 Temperature Anomaly Analysis"
        },
      },
      adapters: {
        date: { id: 'luxon', DateTime },
      },
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
            text: "Temperature Anomaly",
          },
          min: -1.5,
          max: 1.5
        },
      },
      elements: {
        point:{
            radius: 0
        }
      },
    };

    return (
      <div className='visual1-container'>
        <div>
          <h1>
            Global historical surface temperature anomalies from January 1850 onwards
          </h1>
            <p>
              Line graph of global surface temperature variations covering a period of 170 years and
              from the northern hemisphere for a period of 2000 years.<br/>
              Hadley Centre<a href="https://www.metoffice.gov.uk/hadobs/hadcrut5"> data & description.</a><br/>
              Bolin Centre<a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt"> data.</a><br/>
              Bolin Centre <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">data description.</a><br/>
              <a href="https://www.nature.com/articles/nature03265">Full study</a><br/>
            </p>
          <div style={{ width: '100%' }}>
            <div className='container-visual-radios'>
              <div className='radio'>
              <input type='radio' className='form-check-input' id='annual' name='timeframe' defaultChecked onClick={TimeframeAnnual}/>
              <label htmlFor='annual'>Annual</label>
              </div>
              <div className='radio'>
              <input type='radio' className='form-check-input' id='monthly' name='timeframe' onClick={TimeframeMonthly} />
                <label htmlFor='monthly'>Monthly</label>
              </div>
            </div>
            <div className='visual1-chart-content'>
              {timeframe === "Annual" && <Line data={annualData} options={options} />}
              {timeframe === "Monthly" && <Line data={monthlyData} options={options} />}
            </div>
            <label>Description</label>
            <textarea
              disabled={userVisualOptions != null || !addingNewUserView}
              className="form-control"
              defaultValue={userVisualOptions || "Temperature Anomaly Analysis"}
              onChange={e=> handleSetVisualData(1, e.target.value)}>
            </textarea>
          </div>
        </div>
      </div>
    );
  };

export default Visual1Chart;