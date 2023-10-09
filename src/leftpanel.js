import React from 'react';
import './left.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Button } from '@mui/material';

function LeftPanel() {
  return (
    <div>
      <div className='leftcontainer'>
        <div className='date-calendar'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
            
            />
            <button className="custom-button">Show</button>
          </LocalizationProvider>
        
        </div>
      <br></br>
        <div className='data'>
          <div className='title'>Apollo 11</div>
          <div className='Report'>
            Launch:
            

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LeftPanel;
