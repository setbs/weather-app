import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherDetails from "../components/WeatherDetails";
import { getWeatherByCity } from "../api/weatherApi";
import WeatherEffects from "../components/WeatherEffects";

function City() {
  const { name } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getWeatherByCity(name)
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (!weather) return <p className="muted">Can't get weather 😢</p>;

  return (
    <section className="panel">
      {(() => {
        const main = weather.list[0]?.weather?.[0]?.main || "";
        const map = {
          Rain: "rain",
          Drizzle: "rain",
          Thunderstorm: "rain",
          Snow: "snow",
          Mist: "wind",
          Fog: "wind",
          Smoke: "wind",
          Dust: "wind",
          Sand: "wind",
          Haze: "wind",
          Clouds: "wind",
          Clear: "",
        };
        const type = map[main] || "";
        return type ? <WeatherEffects type={type} /> : null;
      })()}

      <WeatherDetails city={name} data={weather} />
    </section>
  );
}

export default City;
