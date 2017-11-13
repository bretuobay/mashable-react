import * as _ from "lodash";

export const retrieveDataFromStore = (state, ownProps) => {
  let storeNewsData = state.currentNews;

  if (storeNewsData) {
    return storeNewsData
      .map(data => {
        let keyval = _.findKey(data, ["source", ownProps.source]);

        if (keyval) {
          return data[keyval].articles;
        } else {
          return [];
        }
      })
      .filter(stateData => {
        return _.isArray(stateData) && !_.isEmpty(stateData);
      })[0];
  }
};
