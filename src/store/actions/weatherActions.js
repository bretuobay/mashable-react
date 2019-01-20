import { put, takeEvery} from 'redux-saga/effects';
import {GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE, GET_WEATHER} from '../../constants/actionTypes';
import {WEATHER_API_URL_ENDPOINT, WEATHER_API_KEY}  from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const fetchSingleCityWeatherAction = (city) => ({
   type: GET_WEATHER,
   payload: city
})

// worker Saga: will be fired on GET_WEATHER_DATA actions
function* fetchSingleCityWeather({ payload: city }) {
  try {
     const { data } = yield runApiGetCall({
      apiEndPoint: WEATHER_API_URL_ENDPOINT,
      urlQuery: `/weather?q=${city}&appid=${WEATHER_API_KEY}`
    });
     yield put({type: GET_WEATHER_SUCCESS, payload: data});
  } catch (error) {
     yield put({type: GET_WEATHER_FAILURE, payload: error});
  }
}

/*
 Starts get on each dispatched `GET_WEATHER_DATA` action.
 Allows concurrent fetches of user.
*/
function* weatherSaga() {
 yield takeEvery(GET_WEATHER, fetchSingleCityWeather);
}

export {weatherSaga};

  



  

  



