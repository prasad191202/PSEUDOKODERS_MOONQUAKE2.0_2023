import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import styles from './HomePage.module.css';
import Navbar from './Navbar';
import moon from "./Asset/moon.jpg"
import "./moonquakedata.css"
import * as d3 from 'd3';
import data from "./moon_landings.json";
import data2 from "./combinedData.json"
import Calendar from 'react-calendar';
import "./cal.css"
import data3 from "./NASA.nakamura_1979_sm_locations.json"

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';

function HomePage() 
{
  
const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 360,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3
  }));

  const [landingSites, setLandingSites] = useState([]);

  const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

  const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

  const [selectedDate, setSelectedDate] = useState(new Date("2021-9-15"));
  const [selectedYear, setSelectedYear] = useState(1212);
  const handleDateChange = (date) => {
    // This function will be called when a date is selected
    setSelectedDate(date);
  };

const handleYearChange = (year) => {
  // This function will be called when a date is selected
  setSelectedYear(year);
  console.log(year);
  };

console.log(data2.filter(item => item.Year > 1975))
const HomePage = () => {
}
  return (
    <>
      <Navbar />
      <div className='containers'>
      <div className='cal'>
      <Calendar
       style={{ border: '2px solid #ccc',padding:'10px', borderRadius: '5px' }}
      onChange={handleDateChange} />
        {selectedDate && (
          <div className='imp_title'>
         <p>Selected Date: {selectedDate.toDateString()}</p>
      </div>
        
      )}
      
      </div>

      <div className='imp_dates'>
        
        <div className='imp_data'>
           Total Satellites as of 2023: <h1>21</h1>
        </div>
      </div>
    </div>


  

    <div className={styles.content}>
          <Globe
              globeImageUrl = {moon}
              showGraticules={true}
              labelsData={data}
              pointsData={data2.map(item => ({
                lat: item.Lat, // Replace with the actual latitude field in your data
                lng: item.Long, // Replace with the actual longitude field in your data
                station: item.Station,
                year: item.Year,
                day: item.Day,
                P_YN: item.StationData.P_YN,
                P_NG: item.StationData.P_NG,
                P_JK: item.StationData.P_JK,
                P_PH: item.StationData.P_PH,
                P_Mean: item.StationData.P_Mean,
                S_YN: item.StationData.S_YN,
                S_NG: item.StationData.S_NG,
                S_JK: item.StationData.S_JK,
                S_PH: item.StationData.S_PH,
                S_Mean: item.StationData.S_Mean
              })).filter(item => item.year < selectedDate.getFullYear())}
              pointText="Station"
              pointLabel={d => `
              <div><b>${"Apollo " + d.station + " Reading" }</b></div>
              <div><b>${"P_YN: " + d.P_YN }</b></div>
              <div><b>${"P_NG: " + d.P_NG }</b></div>
              <div><b>${"P_JK: " + d.P_JK }</b></div>
              <div><b>${"P_PH: " + d.P_PH }</b></div>
              <div><b>${"P_Mean: " + d.P_Mean }</b></div>
              <div><b>${"S_YN: " + d.S_YN }</b></div>
              <div><b>${"S_NG: " + d.S_NG }</b></div>
              <div><b>${"S_JK: " + d.S_JK }</b></div>
              <div><b>${"S_PH: " + d.S_PH }</b></div>
              <div><b>${"S_Mean: " + d.S_Mean }</b></div>
            `}
              pointAltitude={0}
              pointRadius={0.6}
              ringsData={data3.map(item => ({
                lat: item.Lat, // Replace with the actual latitude field in your data
                lng: item.Long, // Replace with the actual longitude field in your data
                year: item.Year,
              })).filter(item => item.year === selectedYear)}
              ringMaxRadius={4}
              labelText="label"
              labelSize={1.7}
              labelDotRadius={0.4}
              labelColor={d => colorScale(d.agency)}
              labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
              labelLabel={d => `
              <div><b>${d.label}</b></div>
            `}
          
   
           
          />
      </div>
      <div className='seismic_cal'>
        <div className='calen'>
        <div className='title'>Seismic Activity</div>
        <div className='b-row1'>
          <button id="yearbutton" value={1971} onClick={() => handleYearChange(1971)}>1971</button>
          <button id="yearbutton" value={1972} onClick={() => handleYearChange(1972)}>1972</button>
          <button id="yearbutton" value={1973} onClick={() => handleYearChange(1973)}>1973</button>
          </div>
          <div className='b-row1'>
          <button id="yearbutton" value={1974} onClick={() => handleYearChange(1974)}>1974</button>
          <button id="yearbutton" value={1975} onClick={() => handleYearChange(1975)}>1975</button>
          <button id="yearbutton" value={1976} onClick={() => handleYearChange(1975)}>1976</button>
          </div>
        </div>
      
        <div className='seismic_dat'>
         
      
            Total Missions on Moon <br/><h1>6</h1>
        

        </div>

      </div>
   

   
    
    </>
  );
};

export default HomePage;