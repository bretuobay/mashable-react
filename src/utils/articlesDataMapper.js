import {get,isEmpty} from "lodash";
import moment from 'moment';

export const retrieveNewsFromStore = (state, ownProps) => 
  get(state, `currentNews.${ownProps.source}.news`);

export const retrieveTimestamp = (state, ownProps) =>  
  get(state, `currentNews.${ownProps.source}.timeStamp`);

export const cacheChecker = (data, timeStamp) =>
  ({
    noData: isEmpty(timeStamp) || data && data.length === 0,
    staleData: moment(new moment()).diff(timeStamp, 'minutes') > 59
  });