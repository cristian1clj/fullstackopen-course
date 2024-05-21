import { useEffect, useState } from "react"
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import Filter from "./components/Filter";
import personsService from './services/persons'
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [searching, setSearching] = useState(false);
  const [personsSearched, setPersonsSearched] = useState([]);
  const [message, setMessage] = useState({ body: null, type: null });
  
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
      {
        message.body === null
        ? null
        : <Notification message={message.body} style={message.type} setMessage={setMessage} />
      }

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
        setMessage={setMessage}
      />

      <h3>Numbers</h3>
      <PersonsList 
        setPersons={setPersons}
        persons={searching ? personsSearched : persons} 
        personsService={personsService}
        setMessage={setMessage}
      />
    </>
  )
}

export default App
