import PersonItem from "./PersonItem";

const PersonsList = ({ persons }) => {
  return (
    <ul>
      {
        persons.map(person => {
          return <PersonItem key={person.name} name={person.name} number={person.number} />
        })
      }
    </ul>
  );
}

export default PersonsList;