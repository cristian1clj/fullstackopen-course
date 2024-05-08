import { useEffect, useState } from "react"
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Filter from "./components/Filter";
import personsService from './services/persons'

function App() {
  const [persons, setPersons] = useState([]);
  const [searching, setSearching] = useState(false);
  const [personsSearched, setPersonsSearched] = useState([]);
  
  useEffect(() => {
    personsService.getAll()
      .then(allPersons => {
        console.log(allPersons);
        setPersons(allPersons);
      });
  }, []);

  return (
    <>
      <h2>Phonebook</h2>
      <Filter 
        setPersonsSearched={setPersonsSearched} 
        setSearching={setSearching} 
        persons={persons} 
      />

      <h3>Add a new</h3>
      <PersonForm 
        setPersons={setPersons} 
        persons={persons} 
        personsService={personsService}
      />

      <h3>Numbers</h3>
      <PersonsList 
        persons={searching ? personsSearched : persons} 
      />
    </>
  )
}

export default App
