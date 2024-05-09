import { useState } from "react";

const PersonForm = ({ setPersons, persons, personsService }) => {
  const [newPerson, setNewPerson] = useState({
    name: '',
    number: ''
  });

  const handleNameChange = (e) => {
    setNewPerson({
      ...newPerson,
      name: e.target.value
    });
  }

  const handleNumberChange = (e) => {
    setNewPerson({
      ...newPerson,
      number: e.target.value
    });
  }

  const addPerson = (e) => {
    e.preventDefault();

    if (newPerson.name === '' || newPerson.number === ''){
      window.alert('Make sure the fields are not empty');

    } else if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())){
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const previousPerson = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());
        personsService.update(previousPerson.id, newPerson)
          .then(personUpdated => {
            setPersons(persons.map(person => person.id === personUpdated.id ? personUpdated : person));
          })
          // eslint-disable-next-line no-unused-vars
          .catch(error => {
            alert(`
            The person ${newPerson.name} was already deleted from server.
            Please reload the page to show the changes.
            `);
          });
      }
      
    } else {
      personsService.create(newPerson)
        .then(personAdded => setPersons([ ...persons, personAdded ]));
    }
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <label htmlFor="name">name:</label>
        <input id="name" value={newPerson.name} onChange={handleNameChange} />

        <label htmlFor="number">number:</label>
        <input id="number" value={newPerson.number} onChange={handleNumberChange} />

        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default PersonForm;