import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "../../constants/actionTypes";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: payload
      };
    case  GET_WEATHER_FAILURE:
    default:
      return state;
  }
};
