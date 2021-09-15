import React, { useState } from "react";
import WeatherCard from "../weather-info";

const Search = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      setWeatherData([...weatherData, { id: weatherData.length, value: data }]);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(true);
  };

  return (
    <div>
      <h1>Weather</h1>
      <form>
        <input
          className="search-box"
          type="text"
          placeholder="search a city..."
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <button className="btn" value="submit" onClick={fetchApi}>
          Search
        </button>
      </form>

      {isLoading &&
        weatherData.map((city) => (
          <WeatherCard key={city.id} city={city.value} list={weatherData} />
        ))}
    </div>
  );
};

export default Search;
