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
          {city}
        </li>
      ))}
    </ul>
  );
}

export default CityList;
