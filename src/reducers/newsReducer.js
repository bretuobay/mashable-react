
import { GET_NEWS_DATA_SUCCESS } from "../constants/actionTypes";


export default  (state = {}, action) => {

  switch(action.type){
    case GET_NEWS_DATA_SUCCESS :
     return{
       ...state,
       data : action.data
     }
     default :
     return state;
  }
}

