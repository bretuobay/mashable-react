import {GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE} from '../../constants/actionTypes';
import {WEATHER_API_URL_ENDPOINT, WEATHER_API_KEY}  from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const getWeatherSuccessAction = payload => ({
    type: GET_WEATHER_SUCCESS,
    payload
});

export const getWeatherFailureAction = payload => ({
  type: GET_WEATHER_FAILURE,
  payload
});

export const fetchSingleCityWeather = (city) => dispatch =>
runApiGetCall({
  apiEndPoint: WEATHER_API_URL_ENDPOINT,
  urlQuery: `/weather?q=${city}&appid=${WEATHER_API_KEY}`,
  dispatch,
  successAction: getWeatherSuccessAction,
  failureAction: getWeatherFailureAction
});
  



  

  



