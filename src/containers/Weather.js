import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleCityWeather } from "../actions/weatherActions";

class Weather extends Component {
  
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.onLoadSingleCity(this.props.currentCity);
  }

  destructDataByCity(weatherProps) {
    let coord, weather, base, main, wind, clouds, dt, sys, id, name, cod;
    return ({
      coord,
      weather,
      base,
      main,
      wind,
      clouds,
      dt,
      sys,
      id,
      name,
      cod
    } = weatherProps);
  }

  renderCityWeather(weatherProps) {
    let wprop = this.destructDataByCity(weatherProps);
    return (
      <div>
        <h3>City under watch : {wprop.name} {wprop.main.temp -273.15}</h3>
      </div>
    );
  }

  

  render() {
    return (
      <div>
        <h1>The Weather Snapshot</h1>
        <div>
          {this.props.data ? this.renderCityWeather(this.props.data) : null}
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onLoadSingleCity: () => dispatch(fetchSingleCityWeather('Kumasi')),
  };
};


const mapStateToProps = (state) => {
  const weather = state.currentWeather;
  return {
    data: weather.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
