import { Container, Stack, Typography } from '@mui/material';
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
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack>
        {weatherData.map((weather, index) => (
          <WeatherCard key={index} data={weather}/>
        ))}
      </Stack>
    </Container>
  );
};

export default AllCitiesWeather;
