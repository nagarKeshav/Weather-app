import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let API_KEY = "db94784b86391435bfe2d0622a5636e6";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await response.json();

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleCityName = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
        evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
    }
  } catch(err) {
    setError(true);
  }
}

  return (
    <div className='SearchBox'>
      <h3>Search for weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="city name" variant="outlined" value={city} onChange={handleCityName} required />
        <br /><br />
        <Button type='submit' variant="contained">Submit</Button>
      </form>
      {error && <p style={{ color: 'red' }}>Error fetching weather data. Please try again.</p>}
    </div>
  );
}