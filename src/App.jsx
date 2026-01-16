import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import City from "./pages/City";
import UnitSwitcher from "./components/UnitSwitcher";

function App() {
  return (
    <div className="app-shell">
      <div className="bg-gradient" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <header className="app-header">
        <div>
          <p className="eyebrow">Forecast</p>
          <Link to="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>Skycast</Link>
        </div>
        <UnitSwitcher />
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city/:name" element={<City />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
