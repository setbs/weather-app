import { useState } from 'react';
import './App.css';
import CityList from "./components/CityList";
import WeatherDetails from './components/WeatherDetails';
import { weatherData } from './data/weatherData';



function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <h1>Weather App</h1>

      <CityList onSelect={setSelectedCity} />

      <WeatherDetails
        city={selectedCity}
        data={selectedCity ? weatherData[selectedCity] : null}
      />
    </div>
  );
}



export default App;
