import CountryItem from './CountryItem';

const CountriesList = ({ countriesSearched }) => {
  return (
    <ul>
      {
        countriesSearched.map(countryName => {
          return <CountryItem key={countryName} name={countryName} />
        })
      }
    </ul>
  );
}

export default CountriesList;