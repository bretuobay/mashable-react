import {GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from '../../constants/actionTypes';
import {NEWS_API_URL_ENDPOINT, NEWS_API_KEY} from '../../constants/appConstants';
import {runApiCall} from '../../utils/apiService';

export const getNewsSuccessAction = data => ({
  type: GET_NEWS_DATA_SUCCESS,
  data
});

export const getNewsFailureAction = data => ({
  type: GET_NEWS_DATA_FAILURE,
  data
});

export const fetchSingleSourceNews = source => dispatch =>
  runApiCall({
    apiEndPoint: NEWS_API_URL_ENDPOINT,
    urlQuery: `/?source=${source}&sortBy=latest&apiKey=${NEWS_API_KEY}`,
    dispatch,
    successAction: getNewsSuccessAction,
    failureAction: getNewsFailureAction
  });

