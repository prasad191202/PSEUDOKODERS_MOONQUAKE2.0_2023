import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // You can include a global CSS file if needed

import HomePage from './HomePage';
import Info from './Info';
import Us from './Us';
import MoonquakeInfo from './moonquakeinfo';

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/info' element={<Info />} />
        <Route path='/us' element={<Us />} />
      </Routes>
    </Router>
  );
}

export default App;
