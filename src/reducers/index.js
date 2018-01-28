import { combineReducers } from 'redux';
import currentWeather from './weatherReducer';
import currentNews from './newsReducer';
import currencyReducer from './currencyReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  currentWeather,
  currencyReducer,
  currentNews,
  routing: routerReducer
});

export default rootReducer;
