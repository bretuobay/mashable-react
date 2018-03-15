
import { GET_CURRENCY_DATA_SUCCESS } from "../../constants/actionTypes";
import * as _ from 'lodash';

export default  (state = {}, action) => {

  switch(action.type){
    case GET_CURRENCY_DATA_SUCCESS :
  
      return {  currencyRates: action.data }
     default :
     return state;
  }
}