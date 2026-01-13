import CityList from "../components/CityList";

function Home({ onSelect }) {
    return (
        <div>
            <h2>CityList</h2>
            <CityList onSelect={onSelect} />
        </div>
    )
}

export default Home;