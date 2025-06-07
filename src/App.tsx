import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllCitiesWeather from './components/AllCitiesWeather/AllCitiesWeather';


function App() {
  return (
    <div className='App'>
      <div>
        <h1>תחזית מסביב לעולם</h1>
        <AllCitiesWeather></AllCitiesWeather>
      </div>
    </div>
  );
}

export default App;
