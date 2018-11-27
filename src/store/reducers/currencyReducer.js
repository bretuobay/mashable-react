
import { GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA_FAILURE } from "../../constants/actionTypes";

export default  (state = {}, action) => {
  const {type,payload} = action;
  switch(type){
    case GET_CURRENCY_DATA_SUCCESS :
      return {  currencyRates: payload }
    case GET_CURRENCY_DATA_FAILURE:  
    default :
     return state;
  }
}