
import { GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE } from "../../constants/actionTypes";
import {get} from 'lodash';

export default  (state = {}, action) => {
  const {type, payload} = action;
  switch(type){
    case GET_NEWS_DATA_SUCCESS : {
      return {
        ...state,
        [get(payload, 'source')]: get(payload, 'articles')
      };
    }
    case GET_NEWS_DATA_FAILURE:
    default :
     return state;
  
}
}
