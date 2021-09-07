import React, { useState } from "react";
import WeatherCard from "../weather-info";

const Search = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");

  const fetchApi = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search city..."
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <button value="submit" onClick={fetchApi}>
          Search
        </button>
      </form>
      <WeatherCard city={weatherData} />
    </div>
  );
};

export default Search;
