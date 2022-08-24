import "./ForecastItem.css";
import "../../../assets/weather-icons/css/weather-icons.min.css";

const ForecastItem = (props) => {
  return (
    <div className="ForecastItem">
      <h2 className="dayOfWeek">{props.data.day}</h2>
      <p>
        <strong className="time">{props.data.time}</strong>
      </p>
      <span className="icon" title={props.data.description}>
        <i className={`wi wi-owm-${props.data.iconCode}`}></i>
      </span>
      <p className="temperature">{props.data.temperature}°C</p>
    </div>
  );
};

export default ForecastItem;
