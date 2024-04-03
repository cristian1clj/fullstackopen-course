const Part = (props) => {
  return (
    <p>
      {props.content.topic} {props.content.exercises}
    </p>
  );
}

export default Part;