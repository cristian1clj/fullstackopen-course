import CountryInfo from "./CountryInfo";
import CapitalWeather from "./CapitalWeather";
import { useEffect, useState } from "react";

const CountryCard = ({ countryName, countriesService }) => {
  const [countryData, setCountryData] = useState({
    abbreviation: '', 
    capital: '',
    area: '',
    languages: [],
    flag: ''
  });

  useEffect(() => {
    countriesService.getByName(countryName)
      .then(data => {
        setCountryData({
          abbreviation: data.cca2, 
          capital: data.capital,
          area: data.area,
          languages: Object.values(data.languages),
          flag: data.flags.png
        });
      });
  });

  return (
    <div>
      <h3>{countryName}</h3>
      <CountryInfo 
        capital={countryData.capital}
        area={countryData.area}
        languages={countryData.languages}
        flag={countryData.flag}
      />
      {
        countryData.capital === '' || countryData.abbreviation === ''
        ? null
        : <CapitalWeather 
            capital={countryData.capital}
            countryAbbreviation={countryData.abbreviation}
          />
      }
    </div>
  );
}

export default CountryCard;