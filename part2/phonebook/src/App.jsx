import { useState } from "react"
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Filter from "./components/Filter";

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [searching, setSearching] = useState(false);
  const [personsSearched, setPersonsSearched] = useState([]);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter setPersonsSearched={setPersonsSearched} setSearching={setSearching} persons={persons} />
      <h3>Add a new</h3>
      <PersonForm setPersons={setPersons} persons={persons} />
      <h3>Numbers</h3>
      <PersonsList 
        persons={searching ? personsSearched : persons} 
      />
    </>
  )
}

export default App
