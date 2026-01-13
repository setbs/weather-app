import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import City from './pages/City';
import UnitSwitcher from './components/UnitSwitcher';

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <UnitSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
      </Routes>
    </div>
  )
};

export default App;
