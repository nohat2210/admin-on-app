import React from 'react';
import PropTypes from 'prop-types';
import logo from 'assets/images/logo.png';

const Logo = ({ width, height, style }) => {
  return <img src={logo} alt="logo" style={{ width, height, ...style }} />;
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
};
export default Logo;
