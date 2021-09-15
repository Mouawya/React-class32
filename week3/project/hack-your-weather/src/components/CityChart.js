import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Link, useParams } from "react-router-dom";

const CityChart = () => {
  const [weatherData, setWeatherData] = useState([]);
  const { cityName } = useParams();

  //I could not figure out why useEffect does not fetch the api although it worked for one time when I was adding the chart and making some changes.
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
        );
        const requestedData = await response.json();
        setWeatherData(requestedData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [cityName]);

  const data = weatherData.list.map((dayWeather) => {
    return {
      day: dayWeather.dt_txt,
      temp: Math.floor(dayWeather.main.temp - 273.15),
    };
  });

  return (
    <>
      <h1>5 days forecast</h1>
      <ResponsiveContainer width="80%" aspect={3}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area
            type="monotone"
            dataKey="temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default CityChart;
