import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as _ from "lodash";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";

class NewsBySource extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFromNewsAPI(this.props.source);
    //this.props.getNewsBySingleSource(this.props.source);
  }

  render() {
    console.log(this.props.data);

    return (
      <div>
        {this.props.data ? <NewsRow articles={this.props.data} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFromNewsAPI: source => dispatch(fetchSingleSourceNews(source))
  };
};

const retrieveDataFromStore = (state, ownProps) => {
  let storeNewsData = state.currentNews;

  if (storeNewsData) {
   return storeNewsData.map(data => {
        let keyval = _.findKey(data, ["source", ownProps.source]);

        if (keyval) {
        
          return   data[keyval].articles;
        } else {
          return [];
        }
      }).filter(stateData => {
        return _.isArray(stateData) &&  !_.isEmpty(stateData);
      })[0];
  }
};

const mapStateToProps = (state, ownProps) => {
  //console.log(retrieveDataFromStore(state, ownProps) )
  return {
     data : retrieveDataFromStore(state, ownProps)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBySource);
