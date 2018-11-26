import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "../../constants/actionTypes";

export default (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        data: data
      };
    case  GET_WEATHER_FAILURE:
    default:
      return state;
  }
};
