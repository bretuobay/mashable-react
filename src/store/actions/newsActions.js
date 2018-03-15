import * as types from '../../constants/actionTypes';
import * as appConstant from '../../constants/appConstants';
import axios from 'axios';

export const getNewsSuccessAction = (data) => {
  return {
    type: types.GET_NEWS_DATA_SUCCESS,
    data : data
  };
};
export const fetchSingleSourceNews = (source) => {
  axios.defaults.baseURL = appConstant.NEWS_API_URL_ENDPOINT;
  return (dispatch) => {
    return axios.get(`/?source=${source}&sortBy=latest&apiKey=${appConstant.NEWS_API_KEY}`)
      .then(response => {
        dispatch(getNewsSuccessAction(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};




  

  



