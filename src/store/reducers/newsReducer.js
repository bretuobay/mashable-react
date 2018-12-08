
import { GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE } from "../../constants/actionTypes";
import moment from 'moment';
import {get} from 'lodash';

export default  (state = {},  {type, payload} ) => {
  switch(type){
    case GET_NEWS_DATA_SUCCESS : {
      return {
        ...state,
        [get(payload, 'source')]: { news: get(payload, 'articles'), timeStamp: moment()}
      };
    }
    case GET_NEWS_DATA_FAILURE:
    default :
     return state;
  
}
}
