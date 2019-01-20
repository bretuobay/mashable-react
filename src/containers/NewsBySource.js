import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleSourceNewsAction } from "../store/actions/newsActions";
import PropTypes from "prop-types";
import { NewsRow } from "../components/NewsRow";
import { retrieveTimestamp, retrieveNewsFromStore, cacheChecker} from "../utils/articlesDataMapper";
import { RenderGuard } from '../components/RenderGuard';


class NewsBySource extends Component {

 componentDidMount() {

    const {source, fetchFromNewsAPI, data, timeStamp} = this.props;

    const {noData,staleData} = cacheChecker(data,timeStamp);
    
    if (noData || staleData) {
     fetchFromNewsAPI(source);
    }
  }

  render() {
    return  <RenderGuard guard={this.props.data}>
            <NewsRow
              articles={this.props.data}
              isSideBarList={this.props.isSideBarList}
            />
      </RenderGuard>;
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
  fetchFromNewsAPI: source => dispatch(fetchSingleSourceNewsAction(source))
});

const mapStateToProps = (state, ownProps) => ({
    data: retrieveNewsFromStore(state, ownProps),
    timeStamp: retrieveTimestamp(state, ownProps)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsBySource);
