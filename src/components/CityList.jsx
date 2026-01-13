import { useState } from "react";
import { Link } from "react-router-dom";

function CityList({ onSelect }) {
  const cities = ["Warszawa", "Wrocław", "Kraków", "Gdańsk", "Poznań"];
  const [query, setQuery] = useState("");

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input 
        type="text" 
        placeholder="Find your city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="city-grid">
        {filteredCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`} className="city-card">
              <span className="city-name">{city}</span>
              <span className="city-arrow">›</span>
            </Link>
          </li>
        ))}

        {filteredCities.lenght === 0 && <p> Nothing found 👾</p>}
      </ul>
    </div>
  );
}

export default CityList;
