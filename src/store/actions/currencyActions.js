import * as types from '../../constants/actionTypes';
import * as appConstant from '../../constants/appConstants';
import axios from 'axios';

export const getCurrencySuccessAction = (data) => {
  return {
    type: types.GET_CURRENCY_DATA_SUCCESS,
    data : data
  };
};
export const fetchCurrencyRates = (exchangeRatesStr) => {
  axios.defaults.baseURL = appConstant.CURRENCY_API_URL_ENDPOINT;
  return (dispatch) => {
    return axios.get(`/quotes?pairs=${exchangeRatesStr}&api_key=${appConstant.CURRENCY_API_KEY}`)
      .then(response => {
        dispatch(getCurrencySuccessAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};




  

  



