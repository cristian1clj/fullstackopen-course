import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {
        props.courseContent.map(part => <Part key={part.topic} content={part} />)
      }
    </>
  );
}

export default Content;