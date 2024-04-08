import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        { name: 'Fundamentals of React', exercises: 10, id: 1 },
        { name: 'Using props to pass data', exercises: 7, id: 2 },
        { name: 'State of a component', exercises: 14, id: 3 },
      ]
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        { name: 'routing', exercises: 3, id: 1 },
        { name: 'Middlewares', exercises: 7, id: 2 },
      ]
    },
  ];

  return (
    <section>
      <h1>Web develop curriculum</h1>
      {
        courses.map(course => <Course key={course.id} name={course.name} parts={course.parts} />)
      }
    </section>
  );
}

export default App
