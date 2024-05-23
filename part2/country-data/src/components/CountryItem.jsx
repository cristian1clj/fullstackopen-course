const CountryItem = ({ name, setCountriesSearched }) => {
  const showCardHandler= () => {
    setCountriesSearched([name]);
  }
  return (
    <li>
      <p>{name}</p>
      <button type="button" onClick={showCardHandler}>show</button>
    </li>
  );
}

export default CountryItem;