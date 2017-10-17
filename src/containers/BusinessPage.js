import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";

class BusinessPage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadSingleSouceNews('techcrunch');
  }

  
  render() {
  
    return (
      <div>
        <h1>The News Snapshot</h1>
        <div>
          { this.props.data ? <NewsRow articles={this.props.data.articles}></NewsRow> : null}
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onLoadSingleSouceNews: (source) => dispatch(fetchSingleSourceNews(source)),
  };
};


const mapStateToProps = (state) => {
  const news = state.currentNews;
  return {
    data: news.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPage);
