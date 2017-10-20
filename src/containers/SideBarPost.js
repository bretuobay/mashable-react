import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";
import { SideBarRow } from "../components/SideBarRow";
import { retrieveDataFromStore } from "../utils/articlesDataMapper";

class SideBarPost extends Component {
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
        {this.props.data ? <SideBarRow articles={this.props.data} /> : null}
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
  //console.log(retrieveDataFromStore(state, ownProps) )
  return {
    data: retrieveDataFromStore(state, ownProps)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBarPost);
