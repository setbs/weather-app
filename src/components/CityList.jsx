import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { searchCities } from "../api/weatherApi";
import { loadFavorites, saveFavorites } from "../utils/localStorage";

const popularCities = [
  { name: "Warsaw", country: "PL" },
  { name: "Wroclaw", country: "PL" },
  { name: "Krakow", country: "PL" },
  { name: "Gdansk", country: "PL" },
  { name: "Poznan", country: "PL" },
  { name: "London", country: "GB" },
  { name: "New York", country: "US" },
  { name: "Tokyo", country: "JP" },
  { name: "Paris", country: "FR" },
  { name: "Sydney", country: "AU" },
];

const cityKey = (city) => `${city.name}-${city.country || ""}-${city.state || ""}`;

function CityList({ onSelect }) {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState(popularCities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(loadFavorites());

  useEffect(() => {
    if (query.trim().length < 2) {
      setCities(popularCities);
      setError("");
      setLoading(false);
      return;
    }

    setLoading(true);
    searchCities(query.trim(), 8)
      .then((res) => {
        setCities(res.length ? res : popularCities);
        setError("");
      })
      .catch(() => {
        setError("Can't search cities 😢");
        setCities(popularCities);
      })
      .finally(() => setLoading(false));
  }, [query]);

  const visibleCities = useMemo(() => cities.slice(0, 5), [cities]);

  const toggleFavorite = (city) => {
    const exists = favorites.some((fav) => cityKey(fav) === cityKey(city));
    const next = exists
      ? favorites.filter((fav) => cityKey(fav) !== cityKey(city))
      : [city, ...favorites].slice(0, 20);
    setFavorites(next);
    saveFavorites(next);
  };

  const isFavorite = (city) => favorites.some((fav) => cityKey(fav) === cityKey(city));

  const formatName = (city) => {
    const parts = [city.name, city.state, city.country].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <div className="city-list">
      <div className="input-shell">
        <input
          type="text"
          placeholder="Search for a city worldwide..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="home-grid">
        <div className="home-block">
          <div className="section-header">
            <p className="section-label">Favorites</p>
            <span className="muted">{favorites.length || "0"} cities</span>
          </div>

          {favorites.length === 0 ? (
            <p className="muted">Add your favorite cities to have them handy.</p>
          ) : (
            <ul className="city-grid">
              {favorites.slice(0, 5).map((city) => (
                <li key={cityKey(city)}>
                  <Link to={`/city/${encodeURIComponent(city.name)}`} className="city-card">
                    <div>
                      <span className="city-name">{formatName(city)}</span>
                      <span className="city-meta">Favorite</span>
                    </div>
                    <div className="city-actions">
                      <button
                        className="fav-button fav-active"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(city);
                        }}
                      >
                        Remove
                      </button>
                      <span className="city-arrow">›</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="home-block">
          <div className="section-header">
            <p className="section-label">All Cities</p>
            <span className="muted">up to 5 results</span>
          </div>

          <ul className="city-grid">
            {visibleCities.map((city) => (
              <li key={cityKey(city)}>
                <Link
                  to={`/city/${encodeURIComponent(city.name)}`}
                  className="city-card"
                  onClick={() => onSelect?.(city.name)}
                >
                  <div>
                    <span className="city-name">{formatName(city)}</span>
                    <span className="city-meta">
                      {isFavorite(city) ? "In Favorites" : "Global Search"}
                    </span>
                  </div>
                  <div className="city-actions">
                    <button
                      className={`fav-button ${isFavorite(city) ? "fav-active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(city);
                      }}
                    >
                      {isFavorite(city) ? "Saved" : "Add to Favorites"}
                    </button>
                    <span className="city-arrow">›</span>
                  </div>
                </Link>
              </li>
            ))}

            {!loading && visibleCities.length === 0 && (
              <p className="muted">Nothing found 👾</p>
            )}
            {loading && <p className="muted">Loading...</p>}
            {error && <p className="muted">{error}</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CityList;
