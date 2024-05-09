const PersonItem = ({ id, name, number, setPersons, personsService }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)){
      personsService.remove(id)
        .then(personDeleted => {
          setPersons(persons => {
            return persons.filter(person => person.id !== personDeleted.id);
          });
        })
        // eslint-disable-next-line no-unused-vars
        .catch(error => {
          alert(`
          The person ${name} was already deleted from server.
          Please reload the page to show the changes.
          `);
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