const Filter = ({ setPersonsSearched, setSearching, persons }) => {
  const searchMatches = e => {
    if (e.target.value !== ''){
      setSearching(true);
      setPersonsSearched(persons.filter(person => {
        const namePerson = person.name.toLowerCase();
        const nameSearched = e.target.value.toLowerCase();
        return namePerson.includes(nameSearched);
      }));
    } else {
      setSearching(false);
      setPersonsSearched([]);
    }
  }

  return (
    <div>
      <label htmlFor="filter">filter shown with</label>
      <input id="filter" onChange={searchMatches} />
    </div>
  );
}

export default Filter;