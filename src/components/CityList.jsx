import { useState } from "react";
import { Link } from "react-router-dom";

function CityList({ onSelect }) {
  const cities = ["Warszawa", "Wrocław", "Kraków", "Gdańsk", "Poznań"];
  
  return (
    <ul>
      {cities.map((city) => (
        <li
          key={city}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(city)}
        >
          <Link to={`/city/${city}`}>{city}</Link> 
        </li>
      ))}
    </ul>
  );
}

export default CityList;
