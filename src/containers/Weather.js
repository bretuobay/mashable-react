import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSingleCityWeather } from "../store/actions/weatherActions";
import { debounce, get } from "lodash";
import GoogleMapReact from "google-map-react";
import { GoogleMapsWrapper } from "../components/GoogleMapsWrapper";


const mapStyle = {
  height: "300px",
  width: "100%"
};


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

  roundN(numInput, decimalPlaces) {
    const tempVal =
      Math.round(numInput * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    return parseFloat(tempVal.toFixed(decimalPlaces));
  }

  renderCityWeather(weatherProps) {
    const convertedTemp = (this.roundN(get(weatherProps, 'main.temp', 0), 2) - 273.15).toFixed(2);
    const configProps = {
      center: { 
        lat: get(weatherProps,'coord.lat', 0),
        lng: get(weatherProps,'coord.lon', 0)
      },
      zoom: 7
    };
    
    return (
      <div className="pt-5">
        <div className="h6"> Currently displaying </div> <br />
        <div className="h6 alert alert-warning"> City : {weatherProps.name}</div>{" "}
        <br />
        <div className="h6 alert alert-success">
          {" "}
          Temperature : {convertedTemp}
        </div>{" "}
        <br />
        <div className="h6 alert alert-info">
          {" "}
          Humidity :{weatherProps.main.humidity}
        </div>
        <div className="pt-5" style={mapStyle}>
          <GoogleMapReact
            center={configProps.center}
            defaultZoom={configProps.zoom}
          >
            <GoogleMapsWrapper
              lat={weatherProps.coord.lat}
              lng={weatherProps.coord.lon}
              text={weatherProps.name}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h3 className="h6">Search Weather</h3>
        </header>

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

const mapDispatchToProps = dispatch => ({
  onLoadSingleCity: currentCity => dispatch(fetchSingleCityWeather(currentCity))
});

const mapStateToProps = state => ({
  data: state.currentWeather.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
