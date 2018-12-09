import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const is = (guard, value = null) => 
  typeof guard === 'function' ? guard(value): !!guard;

export const RenderGuard = ({
    children,
    guard,
    value
  }) =>
  is(guard, value) &&
  <Fragment >
      {children}
 </Fragment>

 RenderGuard.propTypes = {
  guard: PropTypes.any,
  value: PropTypes.any,
  children: PropTypes.any
};

