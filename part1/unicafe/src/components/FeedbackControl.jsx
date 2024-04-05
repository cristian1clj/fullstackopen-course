import Button from "./Button";

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
      <Button text='good' onClick={handleButtonGood} />
      <Button text='neutral' onClick={handleButtonNeutral} />
      <Button text='bad' onClick={handleButtonBad} />
    </div>
  );
}

export default FeedbackControl;