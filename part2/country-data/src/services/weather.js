import axios from "axios";

const openWeatherApi_key = import.meta.env.VITE_SOME_KEY;
const url = 'https://api.openweathermap.org/data/2.5/weather';

const getByCapitalName = (capital, countryAbbreviation) => {
  return axios.get(`${url}?q=${capital},${countryAbbreviation}&appid=${openWeatherApi_key}&units=metric`)
    .then(response => response.data);
}

export default {
  getByCapitalName
}