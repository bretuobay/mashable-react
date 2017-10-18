import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../actions/newsActions";
import { NewsRow } from "../components/NewsRow";

class SciencePage extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLoadSingleSouceNews('techcrunch');
  }

  
  render() {
    return ( 
      
          <div className="row">
            <main className="posts-listing col-lg-8">
              <div className="container">
                {this.props.data ? (
                  <NewsRow articles={this.props.data.articles} />
                ) : null}
              </div>
            </main>
            <aside className="col-lg-4">
            <header>
                <h3 className="h6">Search the blog</h3>
              </header>
            </aside>
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

export default connect(mapStateToProps, mapDispatchToProps)(SciencePage);
