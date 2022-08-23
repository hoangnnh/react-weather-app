import "./ForecastItem.css";

const ForecastItem = (props) => {
  return (
    <div className="ForecastItem">
      <h2 className="dayOfWeek">{props.data.day}</h2>
      <p>
        <strong className="time">{props.data.time}</strong>
      </p>
      <img src={props.data.icon} alt={props.data.description} />
      <p className="temperature">{props.data.temperature}°C</p>
    </div>
  );
};

export default ForecastItem;
