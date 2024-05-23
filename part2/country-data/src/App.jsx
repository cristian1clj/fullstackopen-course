import Filter from "./components/Filter"
import CountriesList from './components/CountriesList';
import CountryCard from './components/CountryCard';
import countriesService from './services/countries';
import { useState, useEffect } from "react"

function App() {
  const [countryNames, setCountryNames] = useState([]);
  const [countriesSearched, setCountriesSearched] = useState([]);

  useEffect(() => {
    countriesService.getAll()
      .then(countries => {
        setCountryNames(countries.map(country => country.name.common));
      });
  }, []);

  return (
    <>
      <Filter 
        countryNames={countryNames}
        setCountriesSearched={setCountriesSearched}
      />

      {
        countriesSearched.length > 10
        ? <p>Too many matches, specify another filter</p>
        : countriesSearched.length > 1
          ? <CountriesList countriesSearched={countriesSearched} />
          : countriesSearched.length === 1
            ? <CountryCard countryName={countriesSearched[0]} countriesService={countriesService} />
            : null
      }
    </>
  )
}

export default App
