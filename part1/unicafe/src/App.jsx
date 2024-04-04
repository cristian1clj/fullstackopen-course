import { useState } from "react"
import FeedbackControl from "./components/FeedbackControl"
import StatisticsControl from "./components/StatisticsControl";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  return (
    <>
      <FeedbackControl setFeedback={setFeedback} />
      <StatisticsControl feedback={feedback} />
    </>
  )
}

export default App
