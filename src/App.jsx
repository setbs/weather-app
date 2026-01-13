import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import City from './pages/City';


function App() {
  return (
    <div>
      <h1>Weather App</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:name" element={<City />} />
      </Routes>
    </div>
  )
};

export default App;
