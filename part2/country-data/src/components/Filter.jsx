const Filter = ({ countryNames, setCountriesSearched }) => {
  const searchMatches = e => {
    if (e.target.value !== ''){
      setCountriesSearched(countryNames.filter(name => name.includes(e.target.value)));
    } else {
      setCountriesSearched([]);
    }
  }

  return (
    <div>
      <label htmlFor="filter">find countries</label>
      <input id="filter" type="text" onChange={searchMatches} />
    </div>
  );
}

export default Filter;