
import {GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA_FAILURE} from '../../constants/actionTypes';
import {CURRENCY_API_KEY, CURRENCY_API_URL_ENDPOINT} from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const getCurrencySuccessAction = payload => ({
  type: GET_CURRENCY_DATA_SUCCESS,
  payload
});

export const getCurrencyFailureAction = payload => ({
  type: GET_CURRENCY_DATA_FAILURE,
  payload
});

export const fetchCurrencyRates = exchangeRatesStr => dispatch =>
  runApiGetCall({
    apiEndPoint: CURRENCY_API_URL_ENDPOINT,
    urlQuery: `/quotes?pairs=${exchangeRatesStr}&api_key=${CURRENCY_API_KEY}`,
    dispatch,
    successAction: getCurrencySuccessAction,
    failureAction: getCurrencyFailureAction
  });






  

  



