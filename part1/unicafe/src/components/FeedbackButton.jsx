const FeedbackButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

export default FeedbackButton;