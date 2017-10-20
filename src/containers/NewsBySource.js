import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";
import { retrieveDataFromStore } from "../utils/articlesDataMapper";

class NewsBySource extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFromNewsAPI(this.props.source);
  }

  render() {
    return (
      <div>
        {this.props.data ? (
          <NewsRow
            articles={this.props.data}
            isSideBarList={this.props.isSideBarList}
          />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFromNewsAPI: source => dispatch(fetchSingleSourceNews(source))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    data: retrieveDataFromStore(state, ownProps)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsBySource);
