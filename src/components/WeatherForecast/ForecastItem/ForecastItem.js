import "./ForecastItem.css";
import "../../../assets/weather-icons/css/weather-icons.min.css";
import { convertFromCelsiusToFahrenheit } from "../../../helpers";

const ForecastItem = (props) => {
  const temperatureValue = props.isCelsiusUnit
    ? props.data.temperature
    : convertFromCelsiusToFahrenheit(props.data.temperature);
  const temperatureUnit = props.isCelsiusUnit ? "C" : "F";
  
  return (
    <div className="ForecastItem">
      <h2 className="weekday">{props.data.weekday}</h2>
      <p>
        <strong className="time">{props.data.time}h</strong>
      </p>
      <span className="icon" title={props.data.description}>
        <i className={`wi wi-owm-${props.data.iconCode}`}></i>
      </span>
      <p className="temperature">
        {temperatureValue}°{temperatureUnit}
      </p>
    </div>
  );
};

export default ForecastItem;
