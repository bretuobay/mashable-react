import React from "react";
import {get} from 'lodash';
import GoogleMapReact from "google-map-react";
import {roundN} from '../utils/weatherHelper';
import { GoogleMapsWrapper } from "./GoogleMapsWrapper";

const mapStyle = {
  height: "300px",
  width: "100%"
};
  
export const CityWeatherInfo = ({weatherProps}) => {
    const convertedTemp = (roundN(get(weatherProps, 'main.temp', 0), 2) - 273.15).toFixed(2);
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
        <div className="h6 alert alert-warning"> City : {weatherProps.name}</div>
        <br />
        <div className="h6 alert alert-success">
          Temperature : {convertedTemp}
        </div>
        <br />
        <div className="h6 alert alert-info">
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