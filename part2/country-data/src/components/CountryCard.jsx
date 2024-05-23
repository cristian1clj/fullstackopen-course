import { useEffect, useState } from "react";

const CountryCard = ({ countryName, countriesService }) => {
  const [countryInfo, setCountryInfo] = useState({
    name: '',
    capital: '',
    area: '',
    languages: [],
    flag: ''
  });

  useEffect(() => {
    countriesService.getByName(countryName)
      .then(countryData => {
        setCountryInfo({
          name: countryData.name.common,
          capital: countryData.capital,
          area: countryData.area,
          languages: Object.values(countryData.languages),
          flag: countryData.flags.png
        });
      });
  }, []);

  return (
    <div>
      <h3>{countryInfo.name}</h3>

      <p>capital {countryInfo.capital}</p>
      <p>area {countryInfo.area}</p>

      <h4>languages:</h4>
      <ul>
        {
          countryInfo.languages.map(lang => {
            return <li key={lang}>{lang}</li>
          })
        }
      </ul>

      <img src={countryInfo.flag} />
    </div>
  );
}

export default CountryCard;