import StatisticLine from "./StatisticLine";

const Statistics = ({ feedback }) => {
  const feedbacksTotal = feedback.good + feedback.neutral + feedback.bad;
  const feedbacksAverage = (feedback.good - feedback.bad) / feedbacksTotal;
  const positiveFeedbacksPercent = `${(feedback.good / feedbacksTotal) * 100} %`;

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text='good' amount={feedback.good} />
          <StatisticLine text='neutral' amount={feedback.neutral} />
          <StatisticLine text='bad' amount={feedback.bad} />
          <StatisticLine text='all' amount={feedbacksTotal} />
          <StatisticLine text='average' amount={feedbacksAverage} />
          <StatisticLine text='positive' amount={positiveFeedbacksPercent} />
        </tbody>
      </table>
    </>
  );
}

export default Statistics;