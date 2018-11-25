import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { fetchSingleCityWeather } from "../store/actions/weatherActions";
import { CityWeatherInfo } from '../components/CityWeatherInfo';

class Weather extends Component {
  componentDidMount() {
    this.props.onLoadSingleCity(this.props.currentCity);
    this.onChangeInput = debounce(this.onChangeInput.bind(this), 500);
  }

  onChangeInput(event) {
    event.persist();
    const {value} = this.currentCity;
     if(value.length >= 2){
      this.props.onLoadSingleCity(currentCityVal);
     }
  }

  render() {
    return (
      <div>
        <span className="h6">Search Weather </span>
        <div className="form-group">
          <input
            name="currentCity"
            id="currentCity"
            ref={el => (this.currentCity = el)}
            type="text"
            defaultValue={this.props.currentCity}
            onChange={this.onChangeInput}
            placeholder=" Search for City?"
          />
          <button type="submit" className="submit">
            <i className="icon-search" />
          </button>
        </div>
         { this.props.data && <CityWeatherInfo weatherProps={this.props.data} /> }
      </div>
    );
  }
}

Weather.propTypes = {
  data: PropTypes.object,
  onLoadSingleCity: PropTypes.func.isRequired,
  currentCity: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  onLoadSingleCity: currentCity => dispatch(fetchSingleCityWeather(currentCity))
});

const mapStateToProps = state => ({
  data: state.currentWeather.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
