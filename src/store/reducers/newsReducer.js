
import { GET_NEWS_DATA_SUCCESS } from "../../constants/actionTypes";
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
     default :
     return state;
  
}
}
