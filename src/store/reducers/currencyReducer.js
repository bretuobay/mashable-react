
import { GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA_FAILURE } from "../../constants/actionTypes";

export default  (state = {}, action) => {
  const {type,data} = action;
  switch(type){
    case GET_CURRENCY_DATA_SUCCESS :
      return {  currencyRates: data }
    case GET_CURRENCY_DATA_FAILURE:  
    default :
     return state;
  }
}