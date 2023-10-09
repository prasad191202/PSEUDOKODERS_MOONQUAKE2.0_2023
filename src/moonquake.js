import React from 'react'
import "./moonquakedata.css"
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { YearCalendar } from '@mui/x-date-pickers/YearCalendar';
function moonquake() {

  return (

    <div>

      <div className='seismic_cal'>
        <div className='calen'>
        <div className='title'>Seismic Activity</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem>
            <YearCalendar
              className='year'
            />
          </DemoItem>

        </LocalizationProvider>
        </div>
        <div className='seis_title'>
            Recorded By
          </div>
        <div className='seismic_dat'>
         
        <div className='seis_da'>
            <div className='station_name'>Apollo 11</div>
            <button className='locate'>GO</button>
          </div>  

        </div>

      </div>
   
    </div>
  )
}

export default moonquake