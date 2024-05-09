const PersonItem = ({ id, name, number, setPersons, personsService }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete ${name}?`)){
      personsService.remove(id)
        .then(personDeleted => {
          setPersons(persons => {
            return persons.filter(person => person.id !== personDeleted.id);
          });
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