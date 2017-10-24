import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSingleCityWeather } from "../actions/weatherActions";
import { debounce } from "lodash";

class Weather extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadSingleCity(this.props.currentCity);
    this.onChangeInput = debounce(this.onChangeInput.bind(this),500);
  }
  // check out the following link
  //https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
  // not worth using something like redux form for something so basic
  // make it work by night :)

  onChangeInput(event) {
    event.persist();
   // event.preventDefault();
    let currentCityVal = this.currentCity.value;

    currentCityVal.length >= 2? this.props.onLoadSingleCity(currentCityVal) : console.log(' City length must be greater than 2') ;
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

  
  roundN(numInput, decimalPlaces) {
    let tempVal =
      Math.round(numInput * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    return parseFloat(tempVal.toFixed(decimalPlaces));
  }

  renderCityWeather(weatherProps) {
    let wprop = this.destructDataByCity(weatherProps);

    let convertedTemp = (this.roundN(wprop.main.temp, 2) - 273.15).toFixed(2);

    return (
      <div className="pt-5">
        <div className="h6"> Currently displaying </div> <br />
        <div className="h6 alert alert-warning"> City : {wprop.name}</div>{" "}
        <br />
        <div className="h6 alert alert-success">
          {" "}
          Temperature : {convertedTemp}
        </div>{" "}
        <br />
        <div className="h6 alert alert-info"> Humidity :{wprop.main.humidity}</div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h3 className="h6">Search Weather</h3>
        </header>
        {/* <form action="#" className="search-form" onSubmit = {this.onChangeInput}> */}
          <div className="form-group">
            <input
              name="currentCity"
              id="currentCity"
              ref={el => (this.currentCity = el)}
              type="text"
              defaultValue={this.props.currentCity}
              onChange = {this.onChangeInput}
              placeholder=" Search for City?"
            />
            <button type="submit" className="submit">
              <i className="icon-search" />
            </button>
          </div>
        {/* </form> */}
        <div>
          {this.props.data ? this.renderCityWeather(this.props.data) : null}
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  data: PropTypes.object,
  onLoadSingleCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadSingleCity: currentCity =>
      dispatch(fetchSingleCityWeather(currentCity))
  };
};

const mapStateToProps = state => {
  const weather = state.currentWeather;
  return {
    data: weather.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
