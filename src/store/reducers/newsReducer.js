
import { GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE } from "../../constants/actionTypes";
import {get} from 'lodash';

export default  (state = [], action) => {
  const {type, data} = action;
  switch(type){
    case GET_NEWS_DATA_SUCCESS : {
      return {
        ...state,
        [get(data, 'source')]: get(data, 'articles')
      };
    }
    case GET_NEWS_DATA_FAILURE:
    default :
     return state;
  
}
}
