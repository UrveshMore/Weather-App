import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./Weather.css";

function Weather() {
  const [cityName, setCityName] = useState("");
  const [tempInfo, setTempInfo] = useState({});

  const handlesearch = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c9e2c6061692ff51cefc63caff58b71a`
      )
      .then((res) => {
        let data = res.data;

        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
        const weatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
        setTempInfo(weatherInfo);
      });
  };

  // useEffect(() => {
  //     handlesearch()
  // }, [])
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={handlesearch}>
            Search
          </button>
        </div>
      </div>
      <div className="weatherName ">Weather App</div>

      <Card tempInfo={tempInfo}></Card>
    </>
  );
}

export default Weather;
