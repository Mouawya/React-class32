import React, { useState } from "react";
import WeatherCard from "../weather-info";

const Search = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isFetching, setIsFetching] = useState(false);

  const fetchApi = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.log(err);
    }

    setIsFetching(true);
  };

  return (
    <div>
      <form>
        <input
          className="search-box"
          type="text"
          placeholder="search city..."
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <button className="btn" value="submit" onClick={fetchApi}>
          Search
        </button>
      </form>
      {isFetching && <WeatherCard city={weatherData} />}
    </div>
  );
};

export default Search;
