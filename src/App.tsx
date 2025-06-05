import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherCard from './components/WeatherCard/WeatherCard';


function App() {
  return (
    <div className='App'>
      <div>
        <h1>תחזית מסביב לעולם</h1>
        <WeatherCard></WeatherCard>
      </div>
    </div>
  );
}

export default App;
