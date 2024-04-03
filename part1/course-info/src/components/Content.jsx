const Content = (props) => {
  return (
    <>
      <p>
        {props.courseContent[0].topic} {props.courseContent[0].exercises}
      </p>
      <p>
        {props.courseContent[1].topic} {props.courseContent[1].exercises}
      </p>
      <p>
        {props.courseContent[2].topic} {props.courseContent[2].exercises}
      </p>
    </>
  );
}

export default Content;