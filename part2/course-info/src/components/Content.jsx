import Part from "./Part";

const Content = (props) => {
  return (
    <>
      <ul>
        {
          props.courseContent.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
        }
      </ul>
    </>
  );
}

export default Content;