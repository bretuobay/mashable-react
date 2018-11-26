import {get} from "lodash";
// TODO : Refactor to reduce complexity with reducers by reshaping object
export const retrieveDataFromStore = (state, ownProps) => 
  get(state, `currentNews.${ownProps.source}`);

