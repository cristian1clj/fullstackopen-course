import Part from "./Part";

const Content = (props) => {
  return (
    <>
      {
        props.courseContent.map(content => <Part key={content.topic} content={content} />)
      }
    </>
  );
}

export default Content;