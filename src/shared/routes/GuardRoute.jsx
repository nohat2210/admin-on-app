/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken } from 'core/token';

const GuardRoute = ({ isPrivate = false, ...rest }) => {
  const token = getToken();
  if (!token && isPrivate) {
    return <Redirect to="/login" />;
  }
  if (token && !isPrivate) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
};

GuardRoute.propTypes = {
  isPrivate: PropTypes.bool,
};

export default GuardRoute;
