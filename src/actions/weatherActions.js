import * as types from '../constants/actionTypes';
import * as appConstant from '../constants/appConstants';
import axios from 'axios';

export const getWeatherSuccessAction = (data) => {
  return {
    type: types.GET_WEATHER_SUCCESS,
    data : data
  };
};
export const fetchSingleCityWeather = (city) => {
  axios.defaults.baseURL = appConstant.WEATHER_API_URL_ENDPOINT;
  return (dispatch) => {
    return axios.get(`/weather?q=${city}&appid=${appConstant.WEATHER_API_KEY}`)
      .then(response => {
        dispatch(getWeatherSuccessAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};




  

  



