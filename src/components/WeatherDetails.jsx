import React from "react";

import rainingGif from '../../assets/images/raining.gif';
import cloudsGif from '../../assets/images/cloudy.gif';
import snowGif from '../../assets/images/snowing.gif';
import clearGif from '../../assets/images/sunny.gif';

const gifs = {
  Rain: { image: rainingGif, fontColor: 'white' },
  Clouds: { image: cloudsGif, fontColor: 'white' },
  Snow: { image: snowGif, fontColor: 'white' },
  Clear: { image: clearGif, fontColor: 'black', },
};

/*
Gets the forecast field in API
*/
function WeatherDetails(props) {
  const forecast = props.City.weather[0].main;

  return (
    <div className="slds-card weather-details" style={{
      backgroundImage: forecast in gifs ? `url(${gifs[forecast].image})`: 'linear-gradient(to bottom right, lightblue, yellow)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '60%',
      opacity: '.85',
      color: forecast in gifs ? gifs[forecast].fontColor : 'black',
    }}>
      <h1>{props.City.name} <img src={`http://openweathermap.org/img/w/${props.City.weather[0].icon}.png`} width="50" height="50" style={{ margin: 'auto' }} /></h1>
      <h2 className="weather-details-header">Weather details:</h2>
      <h3>Forecast: {forecast}</h3>
      <h3>Temperature: {kelvinToFahrenheit(props.City.main.temp).toFixed(2)}°F</h3>
      <h3>Pressure: {props.City.main.pressure} hPa</h3>
      <h3>Humidity: {props.City.main.humidity}%</h3>
      <h3>High: {kelvinToFahrenheit(props.City.main.temp_max).toFixed(2)}°F</h3>
      <h3>Low: {kelvinToFahrenheit(props.City.main.temp_min).toFixed(2)}°F</h3>
      <h2>Wind Speed: {props.City.wind.speed} mph</h2>
      {props.City.rain !== undefined && <h2>Hourly Rain: {props.City.rain['1h']}mm</h2>}
      <h2>Cloudiness: {props.City.clouds.all}%</h2>
    </div>
  );
}
/*
Converts Kelvin to Fahrenheit
*/
function kelvinToFahrenheit(temp) {
  return ((temp - 273.15) * 1.8) + 32;
}

export default WeatherDetails;