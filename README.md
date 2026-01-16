# Skycast — iOS‑style Weather App

A modern weather app built with React + Vite, inspired by the clean iOS Weather aesthetic. It features glassmorphic UI, Poppins typography, global city search, favorites, unit switching, and animated weather backgrounds (rain, snow, wind).

# https://setbs.github.io/weather-app/
<img width="1761" height="933" alt="изображение" src="https://github.com/user-attachments/assets/2519b6da-09b4-4391-ad86-380fe9ca76b4" />
<img width="1557" height="909" alt="изображение" src="https://github.com/user-attachments/assets/560c9bf8-a4a3-4d3c-a9ad-9a9cd7b25d6d" />

## Features
- iOS‑inspired glass UI with backdrop blur
- Poppins font applied globally
- Global city search using OpenWeather Geocoding API
- Favorites section with localStorage persistence
- Unit switcher: °C, °F, K (Redux Toolkit)
- Current conditions + 5‑day forecast
- Background weather effects: rain, snow, wind
- Responsive layout and accessible labels

## Tech Stack
- React + Vite
- Redux Toolkit
- OpenWeather APIs (Forecast + Geocoding)

## Getting Started
1. Install dependencies:
```zsh
npm install
```
2. Configure your API key (OpenWeather):
```zsh
echo "VITE_WEATHER_API_KEY=<your_openweather_key>" > .env
```
3. Start the dev server:
```zsh
npm run dev
```

## Scripts
- `npm run dev`: start Vite dev server
- `npm run build`: build for production
- `npm run preview`: preview the production build

## Configuration
- Env var: `VITE_WEATHER_API_KEY` (required) for both city search and forecast.
- Weather effects mapping is in `src/pages/City.jsx` (OpenWeather `weather[0].main` → `rain|snow|wind|none`).
- Effect styling and density are in `src/components/WeatherEffects.jsx` and `src/App.css`.
  - Adjust counts in `range()` calls and animation durations for performance.

## Usage
- Home: search cities worldwide, add/remove favorites. Favorites and search lists display up to 5 items.
- City: view current temperature, condition, wind, clouds, and upcoming days. Background effects animate based on current conditions.
- Unit Switcher: toggle °C/°F/K; persists via localStorage.

## Folder Overview
```
src/
  api/weatherApi.js          # OpenWeather forecast + geocoding search
  components/
    CityList.jsx             # Search + Favorites UI
    UnitSwitcher.jsx         # Segmented unit control
    WeatherDetails.jsx       # City weather + forecast cards
    WeatherEffects.jsx       # Rain/Snow/Wind overlays
  pages/
    Home.jsx                 # Home panel (favorites + search)
    City.jsx                 # City view with effects
  store/                     # Redux Toolkit store + unit slice
  utils/localStorage.js      # Unit + favorites persistence
  App.css / index.css        # Global styles and glassmorphic design
```

## Notes
- Favorites are stored client‑side (`localStorage`) and capped for safety.
- OpenWeather free tier has rate limits; consider caching or debouncing further for production.
- Effects are lightweight CSS animations; tune counts for low‑end devices if needed.

## License
This project is for educational/demo purposes. No license specified.
