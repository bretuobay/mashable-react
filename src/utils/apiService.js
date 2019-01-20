import axios from 'axios';
import {set} from 'lodash';

export const runApiGetCall = ({apiEndPoint, urlQuery}) =>
  set(axios, 'defaults.baseURL', apiEndPoint).get(urlQuery);
