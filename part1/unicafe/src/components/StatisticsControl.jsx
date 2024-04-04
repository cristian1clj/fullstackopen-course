import StatisticsItem from "./StatisticItem";

const StatisticsControl = ({ feedback }) => {
  console.log(feedback);
  return (
    <div>
      <h2>statistics</h2>
      <StatisticsItem text='good' amount={feedback.good} />
      <StatisticsItem text='neutral' amount={feedback.neutral} />
      <StatisticsItem text='bad' amount={feedback.bad} />
    </div>
  );
}

export default StatisticsControl;