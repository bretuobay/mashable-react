import {get,isEmpty} from "lodash";
import moment from 'moment';

// This is some sort of selectors..
// source is destructed from ownProps
export const retrieveNewsFromStore = (state, {source}) => 
  get(state, `currentNews.${source}.news`);

export const retrieveTimestamp = (state, {source}) =>  
  get(state, `currentNews.${source}.timeStamp`);

export const cacheChecker = (data, timeStamp) =>
  ({
    noData: isEmpty(timeStamp) || data && data.length === 0,
    staleData: moment(new moment()).diff(timeStamp, 'minutes') > 59
  });