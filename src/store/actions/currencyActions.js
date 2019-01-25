import { put, takeEvery } from 'redux-saga/effects';
import {GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA_FAILURE, GET_CURRENCY_DATA} from '../../constants/actionTypes';
import {CURRENCY_API_KEY, CURRENCY_API_URL_ENDPOINT} from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const fetchCurrencyRatesAction = (exchangeRatesStr) => ({
  type: GET_CURRENCY_DATA,
  payload: exchangeRatesStr
});


// worker Saga: will be fired on GET_CURRENCY_DATA actions
function* fetchCurrencyRates({ payload:exchangeRatesStr }) {
  try {
    // use call for effects utilities to enable  easiertesting
     const  {data}  = yield runApiGetCall({
      apiEndPoint: CURRENCY_API_URL_ENDPOINT,
      urlQuery: `/quotes?pairs=${exchangeRatesStr}&api_key=${CURRENCY_API_KEY}`
    });
     yield put({type: GET_CURRENCY_DATA_SUCCESS, payload: data});
  } catch (error) {
     yield put({type: GET_CURRENCY_DATA_FAILURE, payload: error});
  }
}

/*
 Starts get on each dispatched `GET_CURRENCY_DATA` action.
 Allows concurrent fetches of user.
*/
function* currencySaga() {
 yield takeEvery(GET_CURRENCY_DATA, fetchCurrencyRates);
}

export  {currencySaga};

  

  



