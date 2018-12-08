import {get} from "lodash";
// TODO : Refactor to reduce complexity with reducers by reshaping object
export const retrieveNewsFromStore = (state, ownProps) => 
  get(state, `currentNews.${ownProps.source}.news`);

export const retrieveTimestamp = (state, ownProps) =>  
  get(state, `currentNews.${ownProps.source}.timeStamp`);

