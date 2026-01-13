import { useSelector } from "react-redux";

function convertTemp(temp, unit) {
  if (unit === "F") return (temp * 9) / 5 + 32;
  if (unit === "K") return temp + 273.15;
  return temp;
}

function WeatherDetails({ city, data }) {
  const unit = useSelector((state) => state.unit.value);

  const current = data.list[0];
  const forecast = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  return (
    <div>
      <h2>{city}</h2>

      <p>
        Temperature:{" "}
        {convertTemp(current.main.temp, unit).toFixed(1)} °{unit}
      </p>

      <p>Condition: {current.weather[0].description}</p>
      <p>Wind: {current.wind.speed} m/s</p>
      <p>Clouds: {current.clouds.all}%</p>

      <h3>Weather in next 5 days</h3>
      <ul>
        {forecast.map((item) => (
          <li key={item.dt}>
            {new Date(item.dt * 1000).toLocaleDateString()} —{" "}
            {convertTemp(item.main.temp, unit).toFixed(1)}°{unit},{" "}
            {item.weather[0].main}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDetails;
