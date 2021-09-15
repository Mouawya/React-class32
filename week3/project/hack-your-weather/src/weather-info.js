import React from "react";
import { Link } from "react-router-dom";

const WeatherCard = ({ city }) => {
  if (city.name)
    return (
      <Link to={`/${city.name}`}>
        <div className="weather-card">
          <button className="remove-btn">x</button>
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
      </Link>
    );
  return <p className="message">City not found!</p>;
};

export default WeatherCard;
