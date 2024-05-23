import axios from "axios";

const url = 'https://studies.cs.helsinki.fi/restcountries/api/';

const getAll = () => {
  return axios.get(`${url}/all`)
    .then(response => response.data);
}

const getByName = (name) => {
  return axios.get(`${url}/name/${name}`)
    .then(response => response.data);
}

export default {
  getAll,
  getByName
}