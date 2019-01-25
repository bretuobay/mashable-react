import { put, takeEvery} from 'redux-saga/effects';
import {GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE, GET_NEWS_DATA} from '../../constants/actionTypes';
import {NEWS_API_URL_ENDPOINT, NEWS_API_KEY} from '../../constants/appConstants';
import {runApiGetCall} from '../../utils/apiService';

export const fetchSingleSourceNewsAction = (source) => ({
  type: GET_NEWS_DATA,
  payload: source
});

// worker Saga: will be fired on GET_NEWS_DATA actions
function* fetchSingleSourceNews({ payload: source }) {
  try {
     const {data} = yield runApiGetCall({
      apiEndPoint: NEWS_API_URL_ENDPOINT,
      urlQuery: `/?source=${source}&sortBy=latest&apiKey=${NEWS_API_KEY}`
    });
     yield put({type: GET_NEWS_DATA_SUCCESS, payload: data});
  } catch (error) {
     yield put({type: GET_NEWS_DATA_FAILURE, payload: error});
  }
}

/*
 Starts get on each dispatched `GET_NEWS_DATA` action.
 Allows concurrent fetches of user.
*/
function* newsSaga() {
 yield takeEvery(GET_NEWS_DATA, fetchSingleSourceNews);
}

export  {newsSaga};
