import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherDetails from "../components/WeatherDetails";
import { getWeatherByCity } from "../api/weatherApi";

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
  if (!weather) return <p className="muted">Can`t get a weather 😢</p>;

  return (
    <section className="panel">
      <WeatherDetails city={name} data={weather} />
    </section>
  );
}

export default City;
