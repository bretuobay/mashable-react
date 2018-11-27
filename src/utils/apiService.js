import axios from 'axios';
import {set} from 'lodash';

export const runApiGetCall = ({
    apiEndPoint,
    urlQuery,
    dispatch,
    successAction,
    failureAction
  }) =>
  set(axios, 'defaults.baseURL', apiEndPoint)
  .get(urlQuery)
  .then(response => {
    dispatch(successAction(response.data))
  })
  .catch(error => {
    dispatch(failureAction(error))
  });
