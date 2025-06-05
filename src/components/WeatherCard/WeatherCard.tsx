import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import './WeatherCard.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';

const WeatherCard = () => {

  return (
    <Card sx={{ width: 360, height: 260, margin: 'auto', backgroundColor: '#fff' }}>
      <CardContent sx={{ padding: 3 }}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Box>
            <Typography variant="h3" fontWeight="bold">
              לונדון
            </Typography>
            <Typography variant="h6" color="text.secondary">
              שברי ענן
            </Typography>
          </Box>
            <WbSunnyIcon sx={{ fontSize: 60, color: '#fbc02d' }} />
        </Box>
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Box textAlign="center">
            <Typography variant="h6">טמפ' נמדדת</Typography>
            <Typography variant="h5">29°C</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">טמפ' מורגשת</Typography>
            <Typography variant="h5">30°C</Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="h6">לחות</Typography>
            <Typography variant="h5">52%</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
