import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        q: city,
        units: "metric",
        appid: API_KEY,
      },
    }
  );

  return response.data;
};
