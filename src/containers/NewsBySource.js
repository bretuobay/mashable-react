import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { fetchSingleSourceNews } from "../store/actions/newsActions";
import PropTypes from "prop-types";
import { NewsRow } from "../components/NewsRow";
import { retrieveTimestamp, retrieveNewsFromStore } from "../utils/articlesDataMapper";
import { RenderGuard } from '../components/RenderGuard';


class NewsBySource extends Component {

 componentDidMount() {
    const {source,fetchFromNewsAPI, data, timeStamp} = this.props;
    // This cacheing is not possible until we sink data to local storage of some sort.
      if (moment(timeStamp).diff(new moment(), 'minutes') > 15 || data && data.length === 0) {
      fetchFromNewsAPI(source);
    }
  } 

  render() {
    return (
      <RenderGuard guard={this.props.data}>
          <NewsRow
            articles={this.props.data}
            isSideBarList={this.props.isSideBarList}
          />
      </RenderGuard>
    );
  }
}

NewsBySource.propTypes = {
  data: PropTypes.array,
  fetchFromNewsAPI: PropTypes.func.isRequired,
  isSideBarList: PropTypes.bool,
  source: PropTypes.string,
  timeStamp: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

const mapDispatchToProps = dispatch => ({
  fetchFromNewsAPI: source => dispatch(fetchSingleSourceNews(source))
});

const mapStateToProps = (state, ownProps) => ({
    data: retrieveNewsFromStore(state, ownProps),
    timeStamp: retrieveTimestamp(state, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBySource);
