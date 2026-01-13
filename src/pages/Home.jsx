import CityList from "../components/CityList";

function Home({ onSelect }) {
    return (
        <section className="panel">
            <header className="panel-header">
                <div>
                    <p className="eyebrow">Home</p>
                    <h2 className="panel-title">Favorites and Search</h2>
                    <p className="panel-subtitle">Store your favorite cities and search any city in the world.</p>
                </div>
            </header>

            <CityList onSelect={onSelect} />
        </section>
    );
}

export default Home;