
import {GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA_FAILURE} from '../../constants/actionTypes';
import {CURRENCY_API_KEY, CURRENCY_API_URL_ENDPOINT} from '../../constants/appConstants';
import {runApiCall} from '../../utils/apiService';

export const getCurrencySuccessAction = data => ({
  type: GET_CURRENCY_DATA_SUCCESS,
  data
});

export const getCurrencyFailureAction = data => ({
  type: GET_CURRENCY_DATA_FAILURE,
  data
});

export const fetchCurrencyRates = exchangeRatesStr => dispatch =>
  runApiCall({
    apiEndPoint: CURRENCY_API_URL_ENDPOINT,
    urlQuery: `/quotes?pairs=${exchangeRatesStr}&api_key=${CURRENCY_API_KEY}`,
    dispatch,
    successAction: getCurrencySuccessAction,
    failureAction: getCurrencyFailureAction
  });






  

  



