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
      window.alert(`${newPerson.name} is already added to phonebook`);
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