import {findKey, isArray, get} from "lodash";
// TODO : Refactor to reduce complexity with reducers by reshaping object
export const retrieveDataFromStore = (state, ownProps) => {
  get(state, 'currentNews', [])
    .map(data =>
      findKey(data, ["source", ownProps.source]) ? data[keyval].articles : []
    ).filter(stateData =>
      isArray(stateData) && !_.isEmpty(stateData)
    )[0];
};
