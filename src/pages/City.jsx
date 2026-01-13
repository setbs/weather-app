import { useParams } from "react-router-dom";
import WeatherDetails from "../components/WeatherDetails";
import { weatherData } from "../data/weatherData";

function City() {
    const { name } = useParams();
    const data = weatherData[name];

    if (!data) {
        return <p>City not found</p>
    }

    return (
        <div>
            <WeatherDetails city={name} data={data} />
        </div>
    )
}

export default City;