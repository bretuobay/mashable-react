import React from "react";
import PropTypes from 'prop-types';

export const GoogleMapsWrapper = ({ city }) => <div>{city}</div>;
GoogleMapsWrapper.propTypes = {
  city: PropTypes.any
};