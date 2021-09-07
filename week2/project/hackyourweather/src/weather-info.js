import React from "react";

const WeatherCard = ({ city }) => {
  return (
    <div className="weather-card">
      <h1>
        {city.name}, {city.sys.country}
      </h1>
      <h2>{city.weather[0].main}</h2>
      <h3>{city.weather[0].description}</h3>
      <p>
        min temp: {Math.floor(city.main.temp_min - 273.15)}° <br />
        max temp: {Math.floor(city.main.temp_max - 273.15)}° <br />
        location: {city.coord.lon}, {city.coord.lat}
      </p>
    </div>
  );
};

export default WeatherCard;
