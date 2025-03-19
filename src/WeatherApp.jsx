
import SearchBox from './searchBox'
import InfoBox from './infoBox';
import { useState } from 'react';

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "wonderland",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05, 
        humidity: 47,
        feelLike: 24.84,
        weather: "haze",
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div style={{textAlign: 'center'}}>
        <h2>weather app by deltha</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}

export default WeatherApp;