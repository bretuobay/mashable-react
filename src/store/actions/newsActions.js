import {GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from '../../constants/actionTypes';
import {NEWS_API_URL_ENDPOINT, NEWS_API_KEY} from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const getNewsSuccessAction = payload => ({
  type: GET_NEWS_DATA_SUCCESS,
  payload
});

export const getNewsFailureAction = payload => ({
  type: GET_NEWS_DATA_FAILURE,
  payload
});

export const fetchSingleSourceNews = source => dispatch =>
  runApiGetCall({
    apiEndPoint: NEWS_API_URL_ENDPOINT,
    urlQuery: `/?source=${source}&sortBy=latest&apiKey=${NEWS_API_KEY}`,
    dispatch,
    successAction: getNewsSuccessAction,
    failureAction: getNewsFailureAction
  });

