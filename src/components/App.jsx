import React from "react";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";
import Apikey from "../Api-key";
import './App.css';

const url = city => `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${Apikey}`

class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      City: null
    };
    this.getData = this.getData.bind(this); //have to bind own defined method because react cannot recognize "this" outside of the constructor
    this.showCityWeather = this.showCityWeather.bind(this);
  }

  getData(city) {
    if(city != this.state.City.name){ //to prevent maxing out API calls
      fetch(url(city))
      .then(result => result.json())
      .then(result => {
        this.setState({
          City: result
        })
      })
    }
  }

  showCityWeather() {
    if (!this.state.City) { //if null or undefined 
      return <p>Click on a city.</p>
    }
    else {
      return (
        <WeatherDetails
          City={this.state.City}
        />
      )
    }
  }

  render() {


    return (
      <div className="app-container">
        <Header />
        <div className="city-buttons-container">
          <button className="alert alert-info" onClick={() => this.getData("Chicago")}>Chicago</button>
          <button className="alert alert-primary" onClick={() => this.getData("Milwaukee")}>Milwaukee</button>
          <button className="alert alert-dark" onClick={() => this.getData("Dallas")}>Dallas</button>
          <button className="alert alert-success" onClick={() => this.getData("Minneapolis")}>Minneapolis</button>
        </div>
        {this.showCityWeather()}
      </div>
    );
  }
}


export default App;