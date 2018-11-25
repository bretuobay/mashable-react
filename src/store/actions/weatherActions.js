import {GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE} from '../../constants/actionTypes';
import {WEATHER_API_URL_ENDPOINT, WEATHER_API_KEY}  from '../../constants/appConstants';

export const getWeatherSuccessAction = data => ({
    type: GET_WEATHER_SUCCESS,
    data
});

export const getWeatherFailureAction = data => ({
  type: GET_WEATHER_FAILURE,
  data
});

export const fetchSingleCityWeather = (city) => dispatch =>
runApiCall({
  apiEndPoint: WEATHER_API_URL_ENDPOINT,
  urlQuery: `/weather?q=${city}&appid=${WEATHER_API_KEY}`,
  dispatch,
  successAction: getWeatherSuccessAction,
  failureAction: getWeatherFailureAction
});
  



  

  



