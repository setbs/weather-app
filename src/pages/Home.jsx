import CityList from "../components/CityList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const favourites = useSelector((state) => state.favourites.items);

    return (
        <div>
            <h2>Favourite cities</h2>
            {favourites.length == 0 && <p>No Favourite ☹️</p>}

            <ul>
                {favourites.map((city) => (
                    <li key={city}>
                        <Link to={`/city/${city}`}>{city}</Link>
                    </li>
                ))}
            </ul>

            <hr />
            <h2>All cities</h2>
            <CityList />
        </div>
        
    );
}

export default Home;