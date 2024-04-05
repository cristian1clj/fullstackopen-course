import { useState } from "react"
import FeedbackControl from "./components/FeedbackControl"
import Statistics from "./components/Statistics";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <>
      <h2>give feedback</h2>
      <FeedbackControl setFeedback={setFeedback} />
      <h2>statistics</h2>
      {
        feedback.good !== 0 || feedback.neutral !== 0 || feedback.bad !== 0
        ? <Statistics feedback={feedback} />
        : <p>No feedback given</p>
      }
    </>
  )
}

export default App
