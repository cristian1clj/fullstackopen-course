import FeedbackButton from "./FeedbackButton";

const FeedbackControl = ({ setFeedback }) => {
  const handleButtonGood = () => {
    setFeedback(feedback => {
      return { ...feedback, good: feedback.good + 1 };
    });
  }
  
  const handleButtonNeutral = () => {
    setFeedback(feedback => {
      return { ...feedback, neutral: feedback.neutral + 1 };
    });
  }
  
  const handleButtonBad = () => {
    setFeedback(feedback => {
      return { ...feedback, bad: feedback.bad + 1 };
    });
  }

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButton text='good' onClick={handleButtonGood} />
      <FeedbackButton text='neutral' onClick={handleButtonNeutral} />
      <FeedbackButton text='bad' onClick={handleButtonBad} />
    </div>
  );
}

export default FeedbackControl;