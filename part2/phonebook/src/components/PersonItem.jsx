const PersonItem = ({ id, name, number, setPersons, personsService, setMessage }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)){
      personsService.remove(id)
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          setPersons(persons => {
            return persons.filter(person => person.id !== id);
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          setMessage({
            body: `Information of ${name} has already been removed from server`,
            type: 'error'
          });
        });
      
      setMessage({
        body: `Deleted ${name}`,
        type: 'success'
      });
    }
  }

  return (
    <li>
      <p>{name} {number}</p>
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}

export default PersonItem;