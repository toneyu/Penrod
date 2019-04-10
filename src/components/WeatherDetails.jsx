import React from "react";


function WeatherDetails(props) {
  return (
    <div className="slds-card">
      <h1>{props.City.name} <img src={`http://openweathermap.org/img/w/${props.City.weather[0].icon}.png`} width="50" height="50" style={{ margin: 'auto' }} /></h1>
      <h2 className="weather-details-header">Weather details:</h2>
      <h3>Forecast: {props.City.weather[0].main}</h3>
      <h3>Temperature: {kelvinToFahrenheit(props.City.main.temp).toFixed(2)}°F</h3>
      <h3>Pressure: {props.City.main.pressure} hPa</h3>
      <h3>Humidity: {props.City.main.humidity}%</h3>
      <h3>High: {kelvinToFahrenheit(props.City.main.temp_max).toFixed(2)}°F</h3>
      <h3>Low: {kelvinToFahrenheit(props.City.main.temp_min).toFixed(2)}°F</h3>
      <h2>Wind Speed: {props.City.wind.speed} mph</h2>
      {props.City.rain !== undefined && <h2>Hourly Rain: {props.City.rain['1h']}</h2>}
      <h2>Cloudiness: {props.City.clouds.all}%</h2>
    </div>
  );
}

function kelvinToFahrenheit(temp) {
  return ((temp - 273.15) * 1.8) + 32;
}

export default WeatherDetails;