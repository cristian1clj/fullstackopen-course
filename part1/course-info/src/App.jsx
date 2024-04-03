import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    content: [
      { topic: 'Fundamentals of React', exercises: 10 },
      { topic: 'Using props to pass data', exercises: 7 },
      { topic: 'State of a component', exercises: 14 },
    ]
  };

  const totalExercises = course.content.reduce((result, content) => {
    return result + content.exercises;
  }, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content courseContent={course.content} />
      <Total courseTotal={totalExercises} />
    </div>
  );
}

export default App
