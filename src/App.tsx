import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllCitiesWeather from './components/AllCitiesWeather/AllCitiesWeather';


function App() {
  return (
    <div className='App'>
      <div>
        <AllCitiesWeather></AllCitiesWeather>
      </div>
    </div>
  );
}

export default App;
