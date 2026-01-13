function WeatherDetails({ city, data }) {
  if (!city) {
    return <p>Chose your City</p>;
  }

  return (
    <div>
      <h2>{city}</h2>
      <p>Temperatire: {data.temp} °C</p>
      <p>Condition: {data.condition}</p>
      <p>Wind: {data.wind}</p>
      <p>Clouds: {data.clouds}</p>

      <h3>Weather in next 3 days:</h3>
      <ul>
        {data.forecast.map((day) => (
            <li key={day.day}>
                {day.day}: {day.temp}°C - {day.condition}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDetails;
