import CityList from "../components/CityList";

function Home({ onSelect }) {
    return (
        <section className="panel">
            <header className="panel-header">
                <div>
                    <p className="eyebrow">Locations</p>
                    <h2 className="panel-title">Choose a city</h2>
                    <p className="panel-subtitle">Quick search and navigate to forecast details.</p>
                </div>
            </header>

            <CityList onSelect={onSelect} />
        </section>
    );
}

export default Home;