
import { GET_NEWS_DATA_SUCCESS } from "../../constants/actionTypes";
import * as _ from 'lodash';

export default  (state = [], action) => {

  switch(action.type){
    case GET_NEWS_DATA_SUCCESS :
    let newNewsMap = mapToNewsItemToSource(action.data);  
    return [
      ...state,
      newNewsMap
    ];
     default :
     return state;
  }
}

function mapToNewsItemToSource(payloaddata){
  
    let newSourceArticles = _.keyBy([payloaddata], 'source');
  
    return newSourceArticles;
      
  }

