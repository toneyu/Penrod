import React from "react";
import Header from "./Header";
import WeatherDetails from "./WeatherDetails";
import Apikey from "../Api-key";
import './App.css';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'
import backgroundimg from "../../assets/images/space.jpg"

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

  /* 
  function to fetch city data from weather API 
  */
  getData(city) {
    fetch(url(city))
      .then(result => result.json())
      .then(result => {
        this.setState({
          City: result
        })
      })

  }
  /*
  function to display weather details
  */
  showCityWeather() {
    if (!this.state.City) { //if null or undefined 
      return <p className="placeholder">Click on a City</p>
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
      <div className="app-container" style={{
        backgroundImage: `url(${backgroundimg})`,
      }}>
        <Header />
        <div className="city-buttons-container">
          <button className="slds-button slds-button_brand" onClick={() => this.getData("Chicago")}>Chicago</button>
          <button className="slds-button slds-button_brand" onClick={() => this.getData("Milwaukee")}>Milwaukee</button>
          <button className="slds-button slds-button_brand" onClick={() => this.getData("Dallas")}>Dallas</button>
          <button className="slds-button slds-button_brand" onClick={() => this.getData("Minneapolis")}>Minneapolis</button>
        </div>
        {this.showCityWeather()}
      </div>
    );
  }
}


export default App;