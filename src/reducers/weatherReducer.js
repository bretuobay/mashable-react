
import { GET_WEATHER_SUCCESS } from "../constants/actionTypes";

export default   (state ={}, action) => {
  
  switch(action.type){

    case GET_WEATHER_SUCCESS :
          return {
           ...state,
            data : action.data
        };
      default :
       return state;

  } // switch
  
};

