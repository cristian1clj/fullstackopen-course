import weatherService from '../services/weather';
import { useEffect, useState } from 'react';

const CapitalWeather = ({ capital, countryAbbreviation }) => {
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: 0,
    wind:0, 
    icon:''
  });

  useEffect(() => {
    weatherService.getByCapitalName(capital, countryAbbreviation)
      .then(data => {
        setWeatherInfo({
          temperature: data.main.temp,
          wind: data.wind.speed,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        });
      });
  });

  return (
    <div>
      <h4>Weather in {capital}</h4>
      <p>temperature {weatherInfo.temperature} Celcius</p>
      <img src={weatherInfo.icon} />
      <p>wind {weatherInfo.wind} m/s</p>
    </div>
  );
}

export default CapitalWeather;