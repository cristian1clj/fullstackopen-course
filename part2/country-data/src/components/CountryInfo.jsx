const CountryInfo = ({ capital, area, languages, flag }) => {
  return (
    <div>
      <p>capital {capital}</p>
      <p>area {area}</p>

      <h4>languages:</h4>
      <ul>
        {
          languages.map(lang => {
            return <li key={lang}>{lang}</li>
          })
        }
      </ul>

      <img src={flag} />
    </div>
  );
}

export default CountryInfo;