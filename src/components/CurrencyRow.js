import React from "react";
import PropTypes from "prop-types";
import { getFormattedDateTime } from "../utils/dateHelper";

export const CurrencyRow = ({ currencies }) => {
  return (
    <ul class="list-group">
      {currencies.map(function(curr, index) {
        return (
          <li class="list-group-item" key={index}>
            <span> Symbol : {curr.symbol} </span>
            <span> Price : {curr.price} </span>
            <span> Bid : {curr.bid} </span>
            <span> Ask : {curr.ask} </span>
          </li>
        );
      })}
    </ul>
  );
};
