import { useState } from "react";
import { Link } from "react-router-dom";
import { cities } from "../data/cities";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../store/favouriteSlice";


function CityList() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.items);

  const filteredCities = cities
  .filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  )
  .slice(0, 5);

  const isLimitReached = !favourites.includes(city) && favourites.length >= 3; 

  return (
    <div>
      <input 
        type="text" 
        placeholder="Find your city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredCities.map((city) => (
          <li key={city}>
            <Link to={`/city/${city}`}>{city}</Link>
            <button onClick={() => dispatch(toggleFavourite(city))}
              disabled={isLimitReached}
            >
              {favourites.includes(city) ? "⭐" : "☆"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
