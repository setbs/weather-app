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
    <div className="weather-card">
      <div className="weather-hero">
        <div>
          <p className="eyebrow">Now</p>
          <h2 className="city-title">{city}</h2>
          <p className="current-temp">
            {convertTemp(current.main.temp, unit).toFixed(0)}°{unit}
          </p>
          <p className="condition">{current.weather[0].description}</p>
        </div>

        <div className="metrics">
          <div className="metric">
            <span className="metric-label">Wind</span>
            <span className="metric-value">{current.wind.speed} m/s</span>
          </div>
          <div className="metric">
            <span className="metric-label">Cloudiness</span>
            <span className="metric-value">{current.clouds.all}%</span>
          </div>
        </div>
      </div>

      <div className="forecast-block">
        <p className="section-label">Upcoming days</p>
        <div className="forecast-grid">
          {forecast.map((item) => {
            const dayLabel = new Date(item.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
            });

            return (
              <div className="forecast-card" key={item.dt}>
                <span className="forecast-day">{dayLabel}</span>
                <span className="forecast-temp">
                  {convertTemp(item.main.temp, unit).toFixed(0)}°{unit}
                </span>
                <span className="forecast-desc">{item.weather[0].main}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
