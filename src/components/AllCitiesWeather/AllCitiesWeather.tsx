import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import './AllCitiesWeather.scss';
import weatherService from "../../services/weather.services";
import { useEffect, useState } from 'react';
import { Weather } from '../../data/weather';
import WeatherCard from '../WeatherCard/WeatherCard';
import { cities } from '../../data/cities';

const AllCitiesWeather = () => {
  const [weatherData, setWeatherData] = useState<Weather[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          cities.map(async (city) => {
            const data = await weatherService.getWeatherByLocation(city.lat, city.lon)
            console.log("data",data)
            return new Weather(city.name,
              data.weather[0].description,
              data.main.temp,
              data.main.feels_like,
              data.main.humidity,);
          })
        )
        setWeatherData(results);
      } catch (error) {
        console.error("Error fetching weather data:", error)
      } finally {
        setLoading(false);
      }
    }
    fetchWeather()
  }, [])

return (
  <Box
    sx={{
      backgroundColor: '#e0f7fa',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',       
      boxSizing: 'border-box',  
    }}
  >
    <Typography variant="h3" sx={{ backgroundColor: '#ffffff', width: '100%',height: 80,m: 0}}>
      תחזית מסביב לעולם
    </Typography>
    <Grid container spacing={8} justifyContent="center" sx={{ width: '100%', maxWidth: 1200, mt: 6, boxSizing: 'border-box'}}
    >
      {weatherData.map((weather, index) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
          <WeatherCard data={weather} />
        </Grid>
      ))}
    </Grid>
  </Box>
);
};

export default AllCitiesWeather;
