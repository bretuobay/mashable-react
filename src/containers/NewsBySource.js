import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleSourceNews } from "../store/actions/newsActions";
import { NewsRow } from "../components/NewsRow";
import { retrieveDataFromStore } from "../utils/articlesDataMapper";
import PropTypes from "prop-types";

class NewsBySource extends Component {
 componentDidMount() {
   console.log(this.props.source)
    this.props.fetchFromNewsAPI(this.props.source);
  }

  render() {
    return (
      <div>
        {this.props.data && 
          <NewsRow
            articles={this.props.data}
            isSideBarList={this.props.isSideBarList}
          />
        }
      </div>
    );
  }
}

NewsBySource.propTypes = {
  data :PropTypes.array,
  fetchFromNewsAPI : PropTypes.func.isRequired,
  isSideBarList : PropTypes.bool,
  source :PropTypes.string
}

const mapDispatchToProps = dispatch => ({
  fetchFromNewsAPI: source => dispatch(fetchSingleSourceNews(source))
});

const mapStateToProps = (state, ownProps) => ({
    data: retrieveDataFromStore(state, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBySource);
