import { useSelector } from "react-redux";

function convertTemp(temp, unit) {
  if (unit == "F") return (temp * 9) / 5 +32; 
  if (unit == "K") return temp + 273.15;
  return temp;
}




function WeatherDetails({ city, data }) {
  const unit = useSelector((state) => state.unit.value); 

  if (!city) {
    return <p>Chose your City</p>;
  }

  return (
    <div>
      <h2>{city}</h2>

      <p>
        Temperature: {convertTemp(data.temp, unit).toFixed(1)} °{unit}
      </p>
      <p>Condition: {data.condition}</p>
      <p>Wind: {data.wind}</p>
      <p>Clouds: {data.clouds}</p>     

      <h3>Weather in next days</h3>
      <ul>
        {data.forecast.map((day) => (
          <li key={day.day}>
            {day.day}: {convertTemp(day.temp, unit).toFixed(1)}°{unit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDetails;
