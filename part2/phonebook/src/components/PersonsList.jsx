import PersonItem from "./PersonItem";

const PersonsList = ({ persons, personsService, setPersons }) => {
  return (
    <ul>
      {
        persons.map(person => {
          return <PersonItem 
            key={person.id} 
            id={person.id} 
            name={person.name} 
            number={person.number} 
            setPersons={setPersons}
            personsService={personsService}
          />
        })
      }
    </ul>
  );
}

export default PersonsList;