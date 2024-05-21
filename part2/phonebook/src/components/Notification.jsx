const Notification = ({ message, style, setMessage }) => {
  const classNames = `notification ${style}`;

  setTimeout(() => {
    setMessage({ body: null, style: null });
  }, 5000);

  return (
    <div className={classNames}>
      {message}
    </div>
  );
}

export default Notification;