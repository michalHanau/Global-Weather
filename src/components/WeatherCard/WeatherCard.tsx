import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import './WeatherCard.scss';
import { Weather } from '../../data/weather';
import AcUnitIcon from '@mui/icons-material/AcUnit'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import WhatshotIcon from '@mui/icons-material/Whatshot'

interface WeatherCardProps {
    data: Weather;
}

const WeatherCard = (props: WeatherCardProps) => {
    const getFeelsLikeIcon = (feelsLike: number) => {
    if (feelsLike <= 20) {
      return <AcUnitIcon sx={{ fontSize: 40, color: '#2196f3' }} />
    } else if (feelsLike < 30) {
      return <WbSunnyIcon sx={{ fontSize: 40, color: '#fbc02d' }} />
    } else {
      return <WhatshotIcon sx={{ fontSize: 40, color: '#d84315' }} />
    }
  };

  return (
    <Card sx={{ width: 360, height: 230,justifyContent: 'space-between', backgroundColor: '#fff', boxShadow: 3, }}>
      <CardContent sx={{ padding: 3 }}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {props.data.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {props.data.description}
            </Typography>
          </Box>
            {getFeelsLikeIcon(props.data.feels_like)}
        </Box>
        <Box display="flex" justifyContent="space-between" mt={5}>
          <Box textAlign="center" >
            <Typography variant="h6">טמפ' נמדדת</Typography>
            <Typography variant="h5">{Math.floor(props.data.temp)}°C</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">טמפ' מורגשת</Typography>
            <Typography variant="h5">{Math.floor(props.data.feels_like)}°C</Typography>
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
