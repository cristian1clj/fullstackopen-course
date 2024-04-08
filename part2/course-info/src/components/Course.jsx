import Title from "./Title";
import Content from "./Content";
import Total from "./Total";

const Course = ({ name, parts }) => {
  const totalExercises = parts.reduce((result, parts) => {
    return result + parts.exercises;
  }, 0);

  return (
    <article>
      <Title courseName={name} />
      <Content courseContent={parts} />
      <Total courseTotal={totalExercises} />
    </article>
  );
}

export default Course;