import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import './WeatherCard.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { Weather } from '../../data/weather';

interface WeatherCardProps {
    data: Weather;
}

const WeatherCard = (props: WeatherCardProps) => {
  return (
    <Card sx={{ width: 360, height: 260, margin: 'auto', backgroundColor: '#fff' }}>
      <CardContent sx={{ padding: 3 }}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box>
            <Typography variant="h3" fontWeight="bold">
              {props.data.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.data.description}
            </Typography>
          </Box>
            <WbSunnyIcon sx={{ fontSize: 60, color: '#fbc02d' }} />
        </Box>
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Box textAlign="center">
            <Typography variant="h6">טמפ' נמדדת</Typography>
            <Typography variant="h5">{props.data.temp}°C</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">טמפ' מורגשת</Typography>
            <Typography variant="h5">{props.data.feels_like}°C</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">לחות</Typography>
            <Typography variant="h5">{props.data.humidity}%</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
