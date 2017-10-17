import { combineReducers } from 'redux';
import currentWeather from './weatherReducer';
import currentNews from './newsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  currentWeather,
  currentNews,
  routing: routerReducer
});

export default rootReducer;
