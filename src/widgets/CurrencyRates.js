import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CurrencyRow } from "../components/CurrencyRow";
import { fetchCurrencyRatesAction } from "../store/actions/currencyActions";
import { RenderGuard } from '../components/RenderGuard';


class CurrencyRates extends Component {

  componentDidMount() {
    const {fetchCurrencyRatesAction, currencyRatesList} = this.props;
    fetchCurrencyRatesAction(currencyRatesList);
  }
  
  render() {
    return <RenderGuard guard={this.props.data}>
        <CurrencyRow currencies={this.props.data} /> 
      </RenderGuard>;
  }
}

CurrencyRates.propTypes = {
  data: PropTypes.array,
  currencyRatesList: PropTypes.string,
  fetchCurrencyRatesAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchCurrencyRatesAction: exchangeRatesStr =>
    dispatch(fetchCurrencyRatesAction(exchangeRatesStr))
});

const mapStateToProps = state => ({
  data: state.currencyReducer.currencyRates
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRates);
