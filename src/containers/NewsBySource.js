import React, { Component } from "react";
import { connect } from "react-redux";
import moment from 'moment';
import { isEmpty } from 'lodash';
import { fetchSingleSourceNews } from "../store/actions/newsActions";
import PropTypes from "prop-types";
import { NewsRow } from "../components/NewsRow";
import { retrieveTimestamp, retrieveNewsFromStore } from "../utils/articlesDataMapper";
import { RenderGuard } from '../components/RenderGuard';


class NewsBySource extends Component {

 componentDidMount() {

    const {source, fetchFromNewsAPI, data, timeStamp} = this.props;

    const callNewsAPI = (isEmpty(timeStamp) || data && data.length === 0) 
      || moment(timeStamp).diff(new moment(), 'minutes') > 59;
   
    if (callNewsAPI) {
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
