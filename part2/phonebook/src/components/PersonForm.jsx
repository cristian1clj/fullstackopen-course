import { useState } from "react";

const PersonForm = ({ setPersons, persons, personsService, setMessage }) => {
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

    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLowerCase())){
      if (window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const previousPerson = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());
        personsService.update(previousPerson.id, newPerson)
          .then(personUpdated => {
            setPersons(persons.map(person => person.id === personUpdated.id ? personUpdated : person));
          })
          // eslint-disable-next-line no-unused-vars
          .catch(error => {
            setMessage({
              body: `Information of ${newPerson.name} has already been removed from server`,
              type: 'error'
            });
          });
        
        setMessage({
          body: `Updated ${newPerson.name}`,
          type: 'success'
        });
      }
      
    } else {
      personsService.create(newPerson)
        .then(personAdded => {
          setPersons([ ...persons, personAdded ])
          setMessage({
            body: `Added ${newPerson.name}`,
            type: 'success'
          })
        })
        .catch(error => {
          setMessage({
            body: error.response.data.error,
            type: 'error'
          })
        })
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