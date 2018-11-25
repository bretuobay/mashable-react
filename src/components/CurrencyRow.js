import React from "react";


const cssStyles = {
  fontWeight: "bold",
  border: 0
};

export const CurrencyRow = ({currencies}) => {
  return (
    <ul className="list-group">
      {currencies.map(function(curr, index) {
        return (
          <li className="list-group-item" key={index}>
            <ul className="list-group">
              <li className="list-group-item" style={cssStyles}> Symbol : {curr.symbol} </li>
              <li className="list-group-item" style={cssStyles}> Price : {curr.price} </li>
              <li className="list-group-item" style={cssStyles}> Bid : {curr.bid} </li>
              <li className="list-group-item" style={cssStyles}> Ask : {curr.ask} </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
