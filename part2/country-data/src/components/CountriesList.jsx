import CountryItem from './CountryItem';

const CountriesList = ({ countriesSearched, setCountriesSearched }) => {
  return (
    <ul>
      {
        countriesSearched.map(countryName => {
          return <CountryItem key={countryName} name={countryName} setCountriesSearched={setCountriesSearched} />
        })
      }
    </ul>
  );
}

export default CountriesList;