const StatisticLine = ({ text, amount }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default StatisticLine;