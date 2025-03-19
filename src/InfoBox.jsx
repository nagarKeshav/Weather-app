import './infoBox.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
  const INTI_URL = "https://images.unsplash.com/photo-1733164845653-1816b38b9c0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const RAINY_URL = "https://images.unsplash.com/photo-1567699631772-21be4f5ef2ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  // if (!info) {
  //   return null; // or you can return a loading spinner or a message
  // }

  return (
    <div className="infoBox">
      {/* <h1>Weather info {info.weather}</h1> */}
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL} 
            title="green iguana"
           
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <ThunderstormIcon/>} 
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min temp = {info.tempMin}&deg;C</p>
              <p>Max temp = {info.tempMax}&deg;C</p>
              <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelLike}&deg;C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}