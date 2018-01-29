import React from "react";
import PropTypes from "prop-types";
import { getFormattedDateTime } from "../utils/dateHelper";

const cssStyles = {
  fontWeight: "bold",
  border: 0
};

export const CurrencyRow = ({ currencies }) => {
  return (
    <ul class="list-group">
      {currencies.map(function(curr, index) {
        return (
          <li class="list-group-item" key={index}>
            <ul class="list-group">
              <li class="list-group-item" style={cssStyles}> Symbol : {curr.symbol} </li>
              <li  class="list-group-item" style={cssStyles}> Price : {curr.price} </li>
              <li  class="list-group-item" style={cssStyles}> Bid : {curr.bid} </li>
              <li  class="list-group-item" style={cssStyles}> Ask : {curr.ask} </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
