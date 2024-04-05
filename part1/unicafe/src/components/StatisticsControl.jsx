import StatisticsItem from "./StatisticItem";

const StatisticsControl = ({ feedback }) => {
  const feedbacksTotal = feedback.good + feedback.neutral + feedback.bad;
  const feedbacksAverage = (feedback.good - feedback.bad) / feedbacksTotal;
  const positiveFeedbacksPercent = `${(feedback.good / feedbacksTotal) * 100} %`;

  return (
    <div>
      <h2>statistics</h2>
      <StatisticsItem text='good' amount={feedback.good} />
      <StatisticsItem text='neutral' amount={feedback.neutral} />
      <StatisticsItem text='bad' amount={feedback.bad} />
      <StatisticsItem text='all' amount={feedbacksTotal} />
      <StatisticsItem text='average' amount={feedbacksAverage} />
      <StatisticsItem text='positive' amount={positiveFeedbacksPercent} />
    </div>
  );
}

export default StatisticsControl;