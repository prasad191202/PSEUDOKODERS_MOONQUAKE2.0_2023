import React from 'react';
import Navbar from './Navbar';
import "./moonquakeinfo.css";

const MoonquakeInfo = () => {
    const moonquakes = [
        {
            id: 1,
            name: 'Apollo 11',
            launch: 'Launch Date: July 16, 1969',
            land: 'Landing Date on the Moon: July 20, 1969',
            total: 'Total Moonquakes Recorded: 13',
            description: 'Apollo 11 deployed a passive seismic experiment, a seismometer that recorded data for a few weeks.',
        },
        {
            id: 2,
            name: 'Apollo 12',
            launch: 'Launch Date: November 14, 1969',
            land: 'Landing Date on the Moon: November 19, 1969',
            total: 'Total Moonquakes Recorded: 58',
            description: 'The Apollo 12 seismometer recorded signals from both impacts and man-made sources.',
        },
        {
            id: 3,
            name: 'Apollo 14',
            launch: 'Launch Date: January 31, 1971',
            land: 'Landing Date on the Moon: February 5, 1971',
            total: 'Total Moonquakes Recorded: 28',
            description: 'The seismometer on Apollo 14 recorded natural moonquake events.',
        },
        {
            id: 4,
            name: 'Apollo 15',
            launch: 'Launch Date: July 26, 1971',
            land: 'Landing Date on the Moon: July 30, 1971',
            total: 'Total Moonquakes Recorded: Over 3,500 (the most recorded during any Apollo mission)',
            description: 'The seismometer recorded a significant number of moonquakes and impact events.',
        },
        {
            id: 5,
            name: 'Apollo 16',
            launch: 'Launch Date: April 16, 1972',
            land: 'Landing Date on the Moon: April 21, 1972',
            total: 'Total Moonquakes Recorded: 174',
            description: 'The seismometer recorded a series of moonquakes, including deep moonquakes.',
        },
        {
            id: 6,
            name: 'Apollo 17',
            launch: 'Launch Date: December 7, 1972',
            land: 'Landing Date on the Moon: December 11, 1972',
            total: 'Total Moonquakes Recorded: 25',
            description: 'The seismometer recorded moonquakes and provided valuable data until September 1977.',
        },
    ];

    return (

      <>
      <Navbar />

        <div className="containerss">
          <div className="section">
            <h2>Apollo 11 (July 20, 1969)</h2>
            <p>{moonquakes[0].launch}</p>
            <p>{moonquakes[0].land}</p>
            <p>{moonquakes[0].total}</p>
            <p>{moonquakes[0].description}</p>
          </div>
          <div className="section">
            <h2>Apollo 12 (November 14, 1969)</h2>
            <p>{moonquakes[1].launch}</p>
            <p>{moonquakes[1].land}</p>
            <p>{moonquakes[1].total}</p>
            <p>{moonquakes[1].description}</p>
          </div>
          <div className="section">
            <h2>Apollo 14 (February 5, 1971):</h2>
            <p>{moonquakes[2].launch}</p>
            <p>{moonquakes[2].land}</p>
            <p>{moonquakes[2].total}</p>
            <p>{moonquakes[2].description}</p>
          </div>
          <div className="section">
            <h2>Apollo 15 (July 30, 1971):</h2>
            <p>{moonquakes[3].launch}</p>
            <p>{moonquakes[3].land}</p>
            <p>{moonquakes[3].total}</p>
            <p>{moonquakes[3].description}</p>
          </div>
          <div className="section">
            <h2>Apollo 16 (April 21, 1972):</h2>
            <p>{moonquakes[4].launch}</p>
            <p>{moonquakes[4].land}</p>
            <p>{moonquakes[4].total}</p>
            <p>{moonquakes[4].description}</p>
          </div>
          <div className="section">
            <h2>Apollo 17 (December 11, 1972):</h2>
            <p>{moonquakes[5].launch}</p>
            <p>{moonquakes[5].land}</p>
            <p>{moonquakes[5].total}</p>
            <p>{moonquakes[5].description}</p>
          </div>
        </div>
        </>
      );

};
export default MoonquakeInfo;