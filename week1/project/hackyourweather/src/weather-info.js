import React from "react";
import CityWeather from "./city-weather.json";

const WeatherCard = () => {
  return CityWeather.map((data) => {
    return (
      <div className="weather-card">
        <h1>
          {data.name}, {data.sys.country}
        </h1>
        <h2>{data.weather[0].main}</h2>
        <h3>{data.weather[0].description}</h3>
        <p>
          min temp: {Math.floor(data.main.temp_min - 273.15)}° <br />
          max temp: {Math.floor(data.main.temp_max - 273.15)}° <br />
          location: {data.coord.lon}, {data.coord.lat}
        </p>
      </div>
    );
  });
};

export default WeatherCard;
